-- Drop existing policies
DROP POLICY IF EXISTS "Enable write access for admins only" ON public.students;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.students;
DROP POLICY IF EXISTS "Admins can insert profiles" ON public.profiles;

-- Create new policies for students table
CREATE POLICY "Enable read access for all users" ON public.students
    FOR SELECT USING (true);

CREATE POLICY "Enable write access for admins only" ON public.students
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid()
            AND role = 'admin'
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid()
            AND role = 'admin'
        )
    );

-- Create new policy for profiles table
CREATE POLICY "Admins can insert profiles" ON public.profiles
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid()
            AND role = 'admin'
        )
    );

-- Create function to handle student creation
CREATE OR REPLACE FUNCTION create_student(
    p_email TEXT,
    p_full_name TEXT,
    p_class_id UUID,
    p_admission_date DATE,
    p_status TEXT DEFAULT 'active'
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_profile_id UUID;
    v_student_id UUID;
BEGIN
    -- Check if admin is creating the student
    IF NOT EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Only admins can create students';
    END IF;

    -- Check if profile already exists
    SELECT id INTO v_profile_id
    FROM public.profiles
    WHERE email = p_email;

    IF v_profile_id IS NULL THEN
        -- Create new profile
        INSERT INTO public.profiles (email, full_name, role)
        VALUES (p_email, p_full_name, 'student')
        RETURNING id INTO v_profile_id;
    END IF;

    -- Create student record
    INSERT INTO public.students (profile_id, class_id, admission_date, status)
    VALUES (v_profile_id, p_class_id, p_admission_date, p_status)
    RETURNING id INTO v_student_id;

    RETURN v_student_id;
END;
$$; 