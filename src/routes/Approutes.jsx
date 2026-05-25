import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from '../components/ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import Activity from '../pages/Activity'
import Analytics from '../pages/Analytics'
import Transactions from '../pages/Transactions'
import Invoices from '../pages/Invoices'
import Settings from '../pages/Settings'

const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path='/activity' element={<ProtectedRoute><Activity /></ProtectedRoute>} />
                <Route path='/analytics' element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
                <Route path='/transactions' element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
                <Route path='/invoices' element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
                <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes
