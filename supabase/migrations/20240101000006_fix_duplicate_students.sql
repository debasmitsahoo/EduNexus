-- First, let's clean up any duplicate students
WITH duplicates AS (
  SELECT profile_id, COUNT(*) as count
  FROM students
  GROUP BY profile_id
  HAVING COUNT(*) > 1
),
first_records AS (
  SELECT DISTINCT ON (profile_id) id
  FROM students
  WHERE profile_id IN (SELECT profile_id FROM duplicates)
  ORDER BY profile_id, created_at ASC
)
DELETE FROM students
WHERE profile_id IN (SELECT profile_id FROM duplicates)
AND id NOT IN (SELECT id FROM first_records);

-- Add unique constraint to prevent duplicate students
ALTER TABLE students
ADD CONSTRAINT unique_student_profile UNIQUE (profile_id);

-- Add unique constraint to prevent duplicate profiles
ALTER TABLE profiles
ADD CONSTRAINT unique_profile_email UNIQUE (email);

-- Add index to improve query performance
CREATE INDEX IF NOT EXISTS idx_students_profile_id ON students(profile_id);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);

-- Update the fetch query to include proper joins and ordering
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
  ORDER BY s.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 