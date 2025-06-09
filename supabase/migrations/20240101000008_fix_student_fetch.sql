-- Drop the existing function
DROP FUNCTION IF EXISTS get_students_with_profiles();

-- Create a new function with better error handling
CREATE OR REPLACE FUNCTION get_students_with_profiles()
RETURNS TABLE (
  id UUID,
  profile_id UUID,
  class_id UUID,
  admission_date DATE,
  status VARCHAR(20),
  created_at TIMESTAMPTZ,
  profile_full_name TEXT,
  profile_email TEXT,
  profile_avatar_url TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    s.id,
    s.profile_id,
    s.class_id,
    s.admission_date,
    s.status,
    s.created_at,
    p.full_name as profile_full_name,
    p.email as profile_email,
    p.avatar_url as profile_avatar_url
  FROM students s
  LEFT JOIN profiles p ON s.profile_id = p.id
  ORDER BY s.created_at DESC;
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error in get_students_with_profiles: %', SQLERRM;
    RETURN;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_students_with_profiles() TO authenticated; 