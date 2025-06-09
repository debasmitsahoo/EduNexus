import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type User = {
  id: string
  email: string
  role: 'admin' | 'instructor' | 'student'
  created_at: string
}

export type Course = {
  id: string
  title: string
  description: string
  price: number
  instructor_id: string
  created_at: string
  status: 'draft' | 'published' | 'archived'
}

export type Payment = {
  id: string
  user_id: string
  course_id: string
  amount: number
  status: 'pending' | 'completed' | 'failed'
  created_at: string
}

export type Analytics = {
  total_users: number
  total_courses: number
  total_revenue: number
  active_students: number
} 