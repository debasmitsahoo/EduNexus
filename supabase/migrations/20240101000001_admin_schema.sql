-- Create tables if they don't exist
CREATE TABLE IF NOT EXISTS subjects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS classes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    section VARCHAR(50),
    academic_year VARCHAR(9) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS teachers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id UUID REFERENCES subjects(id),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS students (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    class_id UUID REFERENCES classes(id),
    admission_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS class_subjects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
    subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
    teacher_id UUID REFERENCES teachers(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(class_id, subject_id)
);

-- Create or replace RLS policies
DO $$ 
BEGIN
    -- Drop existing policies if they exist
    DROP POLICY IF EXISTS "Enable read access for all users" ON classes;
    DROP POLICY IF EXISTS "Enable write access for admins only" ON classes;
    DROP POLICY IF EXISTS "Enable read access for all users" ON teachers;
    DROP POLICY IF EXISTS "Enable write access for admins only" ON teachers;
    DROP POLICY IF EXISTS "Enable read access for all users" ON subjects;
    DROP POLICY IF EXISTS "Enable write access for admins only" ON subjects;
    DROP POLICY IF EXISTS "Enable read access for all users" ON students;
    DROP POLICY IF EXISTS "Enable write access for admins only" ON students;
    DROP POLICY IF EXISTS "Enable read access for all users" ON class_subjects;
    DROP POLICY IF EXISTS "Enable write access for admins only" ON class_subjects;

    -- Enable RLS
    ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
    ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
    ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
    ALTER TABLE students ENABLE ROW LEVEL SECURITY;
    ALTER TABLE class_subjects ENABLE ROW LEVEL SECURITY;

    -- Create new policies
    CREATE POLICY "Enable read access for all users" ON classes
        FOR SELECT USING (true);

    CREATE POLICY "Enable write access for admins only" ON classes
        FOR ALL USING (
            EXISTS (
                SELECT 1 FROM public.profiles
                WHERE id = auth.uid()
                AND role = 'admin'
            )
        );

    CREATE POLICY "Enable read access for all users" ON teachers
        FOR SELECT USING (true);

    CREATE POLICY "Enable write access for admins only" ON teachers
        FOR ALL USING (
            EXISTS (
                SELECT 1 FROM public.profiles
                WHERE id = auth.uid()
                AND role = 'admin'
            )
        );

    CREATE POLICY "Enable read access for all users" ON subjects
        FOR SELECT USING (true);

    CREATE POLICY "Enable write access for admins only" ON subjects
        FOR ALL USING (
            EXISTS (
                SELECT 1 FROM public.profiles
                WHERE id = auth.uid()
                AND role = 'admin'
            )
        );

    CREATE POLICY "Enable read access for all users" ON students
        FOR SELECT USING (true);

    CREATE POLICY "Enable write access for admins only" ON students
        FOR ALL USING (
            EXISTS (
                SELECT 1 FROM public.profiles
                WHERE id = auth.uid()
                AND role = 'admin'
            )
        );

    CREATE POLICY "Enable read access for all users" ON class_subjects
        FOR SELECT USING (true);

    CREATE POLICY "Enable write access for admins only" ON class_subjects
        FOR ALL USING (
            EXISTS (
                SELECT 1 FROM public.profiles
                WHERE id = auth.uid()
                AND role = 'admin'
            )
        );
END $$; 