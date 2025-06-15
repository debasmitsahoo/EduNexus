-- Drop the existing function if it exists
DROP FUNCTION IF EXISTS create_teacher;
DROP FUNCTION IF EXISTS get_teachers_with_profiles;

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
    v_admin_id UUID;
BEGIN
    -- Get the admin's ID
    SELECT id INTO v_admin_id
    FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin';

    IF v_admin_id IS NULL THEN
        RAISE EXCEPTION 'Only admins can create teachers';
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

-- Create a function to get teachers with their profile information
CREATE OR REPLACE FUNCTION get_teachers_with_profiles()
RETURNS TABLE (
    id UUID,
    profile_id UUID,
    subject_id UUID,
    status VARCHAR(20),
    created_at TIMESTAMPTZ,
    profile_full_name TEXT,
    profile_email TEXT,
    profile_avatar_url TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        t.id,
        t.profile_id,
        t.subject_id,
        t.status,
        t.created_at,
        p.full_name as profile_full_name,
        p.email as profile_email,
        p.avatar_url as profile_avatar_url
    FROM teachers t
    LEFT JOIN profiles p ON t.profile_id = p.id
    ORDER BY t.created_at DESC;
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Error in get_teachers_with_profiles: %', SQLERRM;
        RETURN;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_teachers_with_profiles() TO authenticated; 