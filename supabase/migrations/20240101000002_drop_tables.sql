-- Drop tables in reverse order of dependencies
DROP TABLE IF EXISTS class_subjects;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS content;
DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS profiles;

-- Drop functions and triggers
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user(); 