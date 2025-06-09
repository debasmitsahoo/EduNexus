-- Ensure admin profile exists with correct role
DO $$
DECLARE
    admin_id UUID;
BEGIN
    -- Get admin user ID
    SELECT id INTO admin_id FROM auth.users WHERE email = 'admin@edunexus.com';
    
    IF admin_id IS NOT NULL THEN
        -- Insert or update admin profile
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
    END IF;
END $$;

-- Update RLS policies to be more permissive for admin operations
ALTER POLICY "Enable write access for admins only" ON public.students
    USING (
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

ALTER POLICY "Enable write access for admins only" ON public.teachers
    USING (
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

-- Grant necessary permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated; 