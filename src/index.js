import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Components/App'
import Student from './Components/Student'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Purchase from './Components/Purchase'
import VpnRequest from './Components/VpnRequest'
import WifiRequest from './Components/WifiRequest'
import Login from './Components/Login'
import Registration from './Components/Registration'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: (
      <h1>
        404 ! <br /> Page Not found Check Page Name
      </h1>
    ),
  },
  {
    path: 'Student',
    element: (
      <ProtectedRoute>
        <Student />
      </ProtectedRoute>
    ),
  },
  {
    path: 'Purchase',
    element: (
      <ProtectedRoute>
        <Purchase />
      </ProtectedRoute>
    ),
  },
  {
    path: 'VpnRequest',
    element: (
      <ProtectedRoute>
        <VpnRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: 'WifiRequest',
    element: (
      <ProtectedRoute>
        <WifiRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: 'Login',
    element: <Login />,
  },
  {
    path: 'Registration',
    element: <Registration />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
