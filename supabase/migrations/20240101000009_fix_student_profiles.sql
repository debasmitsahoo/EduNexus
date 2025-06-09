-- First, let's check for any orphaned student records
DELETE FROM students
WHERE profile_id NOT IN (SELECT id FROM profiles);

-- Update the get_students_with_profiles function to ensure proper profile linking
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
  INNER JOIN profiles p ON s.profile_id = p.id
  WHERE p.role = 'student'
  ORDER BY s.created_at DESC;
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error in get_students_with_profiles: %', SQLERRM;
    RETURN;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add a trigger to ensure profile_id is valid
CREATE OR REPLACE FUNCTION check_student_profile()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = NEW.profile_id
    AND role = 'student'
  ) THEN
    RAISE EXCEPTION 'Invalid profile_id: Profile must exist and have role "student"';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS check_student_profile_trigger ON students;
CREATE TRIGGER check_student_profile_trigger
  BEFORE INSERT OR UPDATE ON students
  FOR EACH ROW
  EXECUTE FUNCTION check_student_profile(); 