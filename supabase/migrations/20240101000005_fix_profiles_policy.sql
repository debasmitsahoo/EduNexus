-- Drop existing policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create new policies for profiles table
CREATE POLICY "Public profiles are viewable by everyone"
    ON public.profiles FOR SELECT
    USING (true);

CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

CREATE POLICY "Admins can insert profiles"
    ON public.profiles FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid()
            AND role = 'admin'
        )
    );

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