import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useToast } from "@/components/ui/use-toast"

export default function AuthCallback() {
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        toast({
          title: "Success",
          description: "Your email has been verified. You can now sign in.",
        })
        navigate('/login')
      }
    })
  }, [navigate, toast])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Verifying your email...</h2>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    </div>
  )
} 