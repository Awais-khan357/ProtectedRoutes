import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:4000/protected', {
          withCredentials: true,
        })
        if (res.status === 200) {
          setIsAuthenticated(true)
        }
      } catch (err) {
        setIsAuthenticated(false)
      }
    }
    checkAuth()
  }, [])

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        'http://localhost:4000/login',
        { email, password },
        { withCredentials: true },
      )
      if (res.status === 200) {
        setIsAuthenticated(true)
        navigate('/home') // Navigate to home after successful login
      }
    } catch (err) {
      console.error('Login failed:', err)
      alert('Incorrect! Check User data or Create an account')
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    navigate('/') // Navigate to login page after logout
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
