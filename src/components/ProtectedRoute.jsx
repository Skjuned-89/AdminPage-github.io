import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isLoggedin=localStorage.getItem('isLoggedIn')
  if (!isLoggedin) {
    return <Navigate to='/' />
  }
  else{
    return children
  }
}

export default ProtectedRoute
