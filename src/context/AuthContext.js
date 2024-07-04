import { createContext, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const login = () => {
    setIsAuthenticated(true)
    return <Navigate to='/' replace />
  }

  const logout = () => {
    setIsAuthenticated(false)
    return <Navigate to='/Login' replace />
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
