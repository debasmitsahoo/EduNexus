-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin', 'instructor', 'student')),
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create courses table
CREATE TABLE public.courses (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    instructor_id UUID REFERENCES public.profiles(id) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create payments table
CREATE TABLE public.payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) NOT NULL,
    course_id UUID REFERENCES public.courses(id) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'failed')),
    payment_method TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create content table
CREATE TABLE public.content (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    course_id UUID REFERENCES public.courses(id) NOT NULL,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('video', 'document', 'quiz', 'assignment')),
    content TEXT,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create RLS policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
    ON public.profiles FOR SELECT
    USING (true);

CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

-- Courses policies
CREATE POLICY "Courses are viewable by everyone"
    ON public.courses FOR SELECT
    USING (true);

CREATE POLICY "Instructors can create courses"
    ON public.courses FOR INSERT
    WITH CHECK (auth.uid() IN (
        SELECT id FROM public.profiles WHERE role = 'instructor'
    ));

CREATE POLICY "Instructors can update their own courses"
    ON public.courses FOR UPDATE
    USING (auth.uid() = instructor_id);

-- Payments policies
CREATE POLICY "Users can view their own payments"
    ON public.payments FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create payments"
    ON public.payments FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Content policies
CREATE POLICY "Content is viewable by course students"
    ON public.content FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.courses c
            WHERE c.id = content.course_id
            AND (
                c.instructor_id = auth.uid()
                OR EXISTS (
                    SELECT 1 FROM public.payments p
                    WHERE p.course_id = c.id
                    AND p.user_id = auth.uid()
                    AND p.status = 'completed'
                )
            )
        )
    );

CREATE POLICY "Instructors can manage their course content"
    ON public.content FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.courses c
            WHERE c.id = content.course_id
            AND c.instructor_id = auth.uid()
        )
    );

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, role)
    VALUES (new.id, new.email, 'student');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 