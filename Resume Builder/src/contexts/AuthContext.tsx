import React, { createContext, useContext } from 'react'

interface AuthContextType {
  user: null
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const signUp = async (email: string, password: string) => {
    // Placeholder function
    return Promise.resolve()
  }

  const signIn = async (email: string, password: string) => {
    // Placeholder function
    return Promise.resolve()
  }

  const signOut = async () => {
    // Placeholder function
    return Promise.resolve()
  }

  return (
    <AuthContext.Provider value={{ user: null, signUp, signIn, signOut }}>
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
