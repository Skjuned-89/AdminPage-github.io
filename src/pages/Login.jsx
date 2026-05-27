import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (e) => {

        e.preventDefault()

        const storageUser = JSON.parse(localStorage.getItem('user'))

        if (
            storageUser &&
            storageUser.username === username &&
            storageUser.password === password
        ) {

            localStorage.setItem('isLoggedIn', true)

            navigate('/dashboard')

        } else {

            setShowError(true)

            setTimeout(() => {
                setShowError(false)
            }, 2000)
        }
    }

    return (

        <div
            style={{
                background:
                    "linear-gradient(180deg, hsla(221, 39%, 11%, 1) 0%, hsla(188, 100%, 47%, 1) 100%)",
            }}
            className='w-screen h-screen flex justify-center items-center relative'
        >

            <form className="w-1/3 py-[3rem] hover:shadow-[0px_0px_60px_1px_rgba(0,0,0,.5)] transition-all rounded-3xl overflow-hidden bg-transparent text-white flex flex-col justify-center items-center gap-5 uppercase">

                <div className="flex flex-col justify-center items-center gap-2">

                    <div className="text-4xl font-bold tracking-wider">
                        User Login
                    </div>

                    <p className='capitalize text-gray-300 font-bold text-[10px] tracking-wider'>
                        Enter Correct User Name And Password
                    </p>

                </div>

                {/* Username */}
                <input
                    className={`text-white border w-1/2 h-[50px] indent-4 rounded-full focus:shadow-lg focus:shadow-gray-100/40 focus:outline-1 active:outline-1 outline-none placeholder:text-sm placeholder:tracking-wider placeholder:text-white ${showError
                            ? "border-red-500"
                            : "border-white"
                        } `}
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Password Wrapper */}
                <div className="w-full flex justify-center items-center flex-col gap-3">

                    <input
                        className={`text-white border w-1/2 h-[50px] indent-4 rounded-full focus:shadow-lg focus:shadow-gray-100/40 focus:outline-1 active:outline-1 outline-none placeholder:text-sm placeholder:tracking-wider placeholder:text-white transition-all ${showError
                            ? "border-red-500"
                            : "border-white"
                            }`}
                        type="password"
                        placeholder='PassWord'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Error Message */}
                    <div
                        className={`text-red-300 text-[10px] tracking-wider font-bold transition-all duration-300 ${showError
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                            }`}
                    >
                        Invalid User Name Or Password
                    </div>

                </div>

                {/* Button */}
                <button
                    className='bg-[#111827] text-white w-1/2 h-[50px] rounded-full font-bold uppercase text-xl hover:cursor-pointer hover:shadow-xl hover:shadow-black-500/20 tracking-wider'
                    onClick={handleLogin}
                >
                    Login
                </button>

                <p className='capitalize text-white font-bold text-xs tracking-wider'>
                    Dont Have Account ?
                    <Link
                        className='hover:border-b pb-[2px] hover:cursor-pointer ml-1'
                        to='/signup'
                    >
                        Sign Up
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default Login