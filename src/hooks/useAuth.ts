import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Session, User } from '@supabase/supabase-js'

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setRole(session?.user?.user_metadata?.role ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setRole(session?.user?.user_metadata?.role ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email: string, password?: string) => {
    return supabase.auth.signInWithPassword({ email, password: password || '' })
  }

  const signup = async (email: string, password?: string) => {
    return supabase.auth.signUp({ email, password: password || '' })
  }

  const logout = async () => {
    return supabase.auth.signOut()
  }

  return {
    session,
    user,
    role,
    login,
    signup,
    logout,
  }
}
