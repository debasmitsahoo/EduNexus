-- Drop the existing function
DROP FUNCTION IF EXISTS create_student;

-- Create a new function to handle student creation
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
    v_auth_user_id UUID;
    v_admin_id UUID;
BEGIN
    -- Get the admin's ID
    SELECT id INTO v_admin_id
    FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin';

    IF v_admin_id IS NULL THEN
        RAISE EXCEPTION 'Only admins can create students';
    END IF;

    -- Get the auth user ID with retries
    FOR i IN 1..5 LOOP
        SELECT id INTO v_auth_user_id
        FROM auth.users
        WHERE email = p_email;

        IF v_auth_user_id IS NOT NULL THEN
            EXIT;
        END IF;

        -- Wait 500ms before retrying
        PERFORM pg_sleep(0.5);
    END LOOP;

    IF v_auth_user_id IS NULL THEN
        RAISE EXCEPTION 'Auth user not found for email: %. Please try again.', p_email;
    END IF;

    -- Create or update profile
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (v_auth_user_id, p_email, p_full_name, 'student')
    ON CONFLICT (id) DO UPDATE
    SET email = p_email,
        full_name = p_full_name,
        role = 'student'
    RETURNING id INTO v_profile_id;

    -- Create student record
    INSERT INTO public.students (profile_id, class_id, admission_date, status)
    VALUES (v_profile_id, p_class_id, p_admission_date, p_status)
    RETURNING id INTO v_student_id;

    RETURN v_student_id;
END;
$$; 