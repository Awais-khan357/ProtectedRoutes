import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Components/App'
import Student from './Components/Student'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Purchase from './Components/Purchase'
import VpnRequest from './Components/VpnRequest'
import WifiRequest from './Components/WifiRequest'
import Login from './Components/Login'
import Registration from './Components/Registration'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
          <Route
            path='Student'
            element={
              <ProtectedRoute>
                <Student />
              </ProtectedRoute>
            }
          />
          <Route
            path='Purchase'
            element={
              <ProtectedRoute>
                <Purchase />
              </ProtectedRoute>
            }
          />
          <Route
            path='VpnRequest'
            element={
              <ProtectedRoute>
                <VpnRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path='WifiRequest'
            element={
              <ProtectedRoute>
                <WifiRequest />
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<Login />} />
          <Route path='Registration' element={<Registration />} />
          <Route
            path='*'
            element={<h1>404! Page Not found. Check Page Name.</h1>}
          />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
