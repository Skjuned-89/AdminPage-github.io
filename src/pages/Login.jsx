import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = () => {
        const storageUser = JSON.parse(localStorage.getItem('user'))
        if (storageUser && storageUser.username === username && storageUser.password === password) {
            localStorage.setItem('isLoggedIn', true)
            navigate('/dashboard')
        }
        else {
            alert("Invalid UserName Or Password")
            navigate('/signup')
        }
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#111827] '>
            <div className="w-1/3 py-[3rem] hover:shadow-[0px_0px_60px_1px_rgba(0,0,0,.5)] transition-all rounded-3xl overflow-hidden bg-cyan-500 text-white flex flex-col justify-center items-center gap-10 uppercase">
                <div className="text-4xl font-bold">User Login</div>
                <input className='text-white border-2 w-1/2 h-[50px] indent-4 rounded-full font-bold' type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} />
                <input className='text-white border-2 w-1/2 h-[50px] indent-4 rounded-full font-bold' type="password" placeholder='PassWord' onChange={(e) => { setPassword(e.target.value) }} />
                <button className='bg-white text-black w-1/2 h-[50px] rounded-full font-bold uppercase text-xl hover:cursor-pointer' onClick={handleLogin}>Login</button>
                <p className='tracking-wider text-black font-bold capitalize'>Dont Have Account ? <Link className='hover:border-b-2 pb-1 hover:cursor-pointer' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
