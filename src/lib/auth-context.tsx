import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabase'
import { User } from '@supabase/supabase-js'

// Hardcoded admin credentials
const ADMIN_EMAIL = 'admin@edunexus.com'
const ADMIN_PASSWORD = 'Admin@123'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  // Initialize auth state
  useEffect(() => {
    let mounted = true

    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) throw error

        if (mounted) {
          setUser(session?.user ?? null)
          setIsAdmin(session?.user?.email === ADMIN_EMAIL)
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null)
        setIsAdmin(session?.user?.email === ADMIN_EMAIL)
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      
      // For admin login
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const { error } = await supabase.auth.signInWithPassword({
          email: ADMIN_EMAIL,
          password: ADMIN_PASSWORD
        })

        if (error) {
          throw new Error('Failed to sign in as admin')
        }
        return
      }

      // For regular users
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } catch (error: any) {
      console.error('Auth error:', error)
      throw new Error(error.message || 'Invalid login credentials')
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      // Clear local state
      setUser(null)
      setIsAdmin(false)
    } catch (error: any) {
      console.error('Sign out error:', error)
      throw new Error(error.message || 'Failed to sign out')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 