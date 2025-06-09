-- Drop the existing function if it exists
DROP FUNCTION IF EXISTS create_teacher;

-- Create a new function to handle teacher creation
CREATE OR REPLACE FUNCTION create_teacher(
    p_email TEXT,
    p_full_name TEXT,
    p_subject_id UUID,
    p_status TEXT DEFAULT 'active'
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_profile_id UUID;
    v_teacher_id UUID;
    v_auth_user_id UUID;
BEGIN
    -- Check if admin is creating the teacher
    IF NOT EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Only admins can create teachers';
    END IF;

    -- Get the auth user ID
    SELECT id INTO v_auth_user_id
    FROM auth.users
    WHERE email = p_email;

    IF v_auth_user_id IS NULL THEN
        RAISE EXCEPTION 'Auth user not found for email: %', p_email;
    END IF;

    -- Create or update profile
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (v_auth_user_id, p_email, p_full_name, 'instructor')
    ON CONFLICT (id) DO UPDATE
    SET email = p_email,
        full_name = p_full_name,
        role = 'instructor'
    RETURNING id INTO v_profile_id;

    -- Create teacher record
    INSERT INTO public.teachers (profile_id, subject_id, status)
    VALUES (v_profile_id, p_subject_id, p_status)
    RETURNING id INTO v_teacher_id;

    RETURN v_teacher_id;
END;
$$; 