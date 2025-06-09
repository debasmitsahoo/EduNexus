-- Create admin user if not exists
DO $$
DECLARE
    admin_id UUID;
BEGIN
    -- Check if admin user exists
    SELECT id INTO admin_id FROM auth.users WHERE email = 'admin@edunexus.com';
    
    -- If admin user doesn't exist, create it
    IF admin_id IS NULL THEN
        INSERT INTO auth.users (
            email,
            encrypted_password,
            email_confirmed_at,
            created_at,
            updated_at,
            raw_app_meta_data,
            raw_user_meta_data,
            is_super_admin,
            role
        ) VALUES (
            'admin@edunexus.com',
            crypt('Admin@123', gen_salt('bf')),
            NOW(),
            NOW(),
            NOW(),
            '{"provider":"email","providers":["email"]}',
            '{"role":"admin"}',
            true,
            'authenticated'
        ) RETURNING id INTO admin_id;
    END IF;

    -- Ensure admin profile exists
    INSERT INTO public.profiles (id, email, role, full_name)
    VALUES (
        admin_id,
        'admin@edunexus.com',
        'admin',
        'Admin User'
    )
    ON CONFLICT (id) DO UPDATE
    SET role = 'admin',
        email = 'admin@edunexus.com',
        full_name = 'Admin User';

    -- Grant necessary permissions
    GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
    GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
END $$; 