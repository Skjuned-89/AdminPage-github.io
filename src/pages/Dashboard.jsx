import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashcomp from '../components/Dashcomp'


const Dashboard = () => {
  return (
    <div className=''>
      <div className="dashboard flex">
        <Sidebar width='30%' />
        <Dashcomp width='70%' />
      </div>
    </div>
  )
}

export default Dashboard
