import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashcomp from '../components/Dashcomp'


const Dashboard = () => {
  return (
    <div style={{background:"linear-gradient(180deg, hsla(221, 39%, 11%, 1) 0%, hsla(188, 100%, 47%, 1) 100%)",}} className="">
      <div className="flex 2xl:w-[1300px] m-auto">
        <Sidebar width='30%' />
        <Dashcomp width='70%' />
      </div>
    </div>
  )
}

export default Dashboard
