import React from 'react'
import Sidebar from './Sidebar'

const AdminPageShell = ({ title, children }) => {
  const userName = localStorage.getItem('user')
  const Name = JSON.parse(userName).username

  return (
    <div className="dashboard flex">
      <Sidebar />
      <div style={{background:"linear-gradient(180deg, hsla(221, 39%, 11%, 1) 0%, hsla(188, 100%, 47%, 1) 100%)",}} className="flex-1 p-6 overflow-y-auto w-full h-screen">
        {children}
      </div>
    </div>
  )
}

export default AdminPageShell
