import React from 'react'
import { Search, Settings, BellDot ,User } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full bg-red-100 flex justify-between items-center p-5'>
      <div className="font-bold text-3xl flex gap-10">
        Admin Page
        <div className="flex items-center relative">
          <input type="text" placeholder='Search' className='border text-black font-normal text-xl w-xs p-2 rounded-full' />
          <Search className='absolute right-1' />
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center" >
        <Settings size={40} className='hover:cursor-pointer hover:border-b-2 hover:border-black border-b-2 border-red-100 pb-2'/>
        <BellDot  size={40} className='hover:cursor-pointer hover:border-b-2 hover:border-black border-b-2 border-red-100 pb-2'/>
        <User  size={40} className='hover:cursor-pointer hover:border-b-2 hover:border-black border-b-2 border-red-100 pb-2'/>
      </div>
    </div>
  )
}

export default Navbar
