import React from 'react'
import Sidebar from './Sidebar'

const AdminPageShell = ({ title, children }) => {
  const userName = localStorage.getItem('user')
  const Name = JSON.parse(userName).username

  return (
    <div className="dashboard flex">
      <Sidebar />
      <div className="flex-1 bg-[#f5f7fb] p-6 overflow-y-auto w-full h-screen">
        {children}
      </div>
    </div>
  )
}

export default AdminPageShell
