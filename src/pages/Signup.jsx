import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignup = () => {
    const useData = {
      username,
      password,
    }
    localStorage.setItem('user', JSON.stringify(useData))
    alert("SignUp Successful")
    navigate('/')
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#111827] '>
      <div className="w-1/3 py-[100px] hover:shadow-[0px_0px_60px_1px_rgba(0,0,0,.5)] transition-all rounded-3xl overflow-hidden bg-cyan-500 text-white flex flex-col justify-center items-center gap-10 uppercase">
        <div className=" flex flex-col justify-center items-center gap-2">
          <div className="text-4xl font-bold">Sign Up</div>
          <p className='capitalize text-black font-bold'>Please Enter Your valid Details to signup</p>
        </div>
        <input className='text-white border-2 w-1/2 h-[50px] indent-4 rounded-full' type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} />
        <input className='text-white border-2 w-1/2 h-[50px] indent-4 rounded-full' type="text" placeholder='PassWord' onChange={(e) => { setPassword(e.target.value) }} />
        <button className='bg-white text-black w-1/2 h-[50px] rounded-full font-bold uppercase text-xl hover:cursor-pointer' onClick={handleSignup}>Sign Up</button>
        <p className='tracking-wider capitalize text-black font-bold'>Already Have Account ? <Link className='hover:border-b-2 pb-1 hover:cursor-pointer' to='/'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
