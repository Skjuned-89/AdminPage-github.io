import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)
  const [showerror, setShowerror] = useState(false)

  const navigate = useNavigate()
  const checkPasswordStrength = (password) => {
    let strength = 0;

    if (password.length > 5) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    return strength
  };


  useEffect(() => {
    setStrength(checkPasswordStrength(password))

  }, [password])

  const submitHandler = (e) => {
    setTimeout(() => {

    }, 1000);
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    if (username.length < 5 || password.length < 5) {
      setUsername("");
      setPassword("");

      setShowerror(true)
      setTimeout(() => {
        setShowerror(false)
      }, 2000)
    }
    else {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    }

  };

  return (

    <div style={{ background: "linear-gradient(180deg, hsla(221, 39%, 11%, 1) 0%, hsla(188, 100%, 47%, 1) 100%)", }} className='w-screen h-screen flex justify-center items-center relative '>
      <form className="w-1/3 py-[3rem] hover:shadow-[0px_0px_60px_1px_rgba(0,0,0,.5)] transition-all rounded-3xl overflow-hidden bg-transparent text-white flex flex-col justify-center items-center gap-5 uppercase"
        onSubmit={
          (e) => {
            submitHandler(e)
          }
        }>
        <div className=" flex flex-col justify-center items-center gap-2">
          <div className="text-4xl font-bold tracking-wider">Sign Up</div>
          <p className='capitalize text-gray-300 font-bold text-[10px] tracking-wider '>Please Enter Your valid Details to signup</p>
        </div>
        <input className='text-white border w-1/2 h-[50px] indent-4 rounded-full focus:shadow-lg focus:shadow-gray-100/40 focus:outline-1 active:outline-1 outline-none placeholder:text-sm placeholder:tracking-wider placeholder:text-white ' type="text" placeholder='User Name' value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <div className="w-full flex justify-center items-center flex-col gap-3">
          <input className='text-white border w-1/2 h-[50px] indent-4 rounded-full focus:shadow-lg focus:shadow-gray-100/40  focus:outline-1 active:outline-1 outline-none placeholder:text-sm placeholder:tracking-wider placeholder:text-white' type="password" placeholder='Password' value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <ul className='w-1/2 flex justify-evenly items-center'>
            <li className={`border px-4 py-1 rounded-2xl text-[10px] lowercase cursor-not-allowed font-bold ${strength <= 2 && strength >= 1 ? "bg-red-500 text-white border-red-500 shadow-lg shadow-red-400/50" : ""}`}>Weak</li>
            <li className={`border px-4 py-1 rounded-2xl text-[10px] lowercase cursor-not-allowed font-bold ${strength > 2 && strength <= 4 ? "bg-yellow-500 text-white border-yellow-500 shadow-lg shadow-yellow-400/50" : ""}`}>Good</li>
            <li className={`border px-4 py-1 rounded-2xl text-[10px] lowercase cursor-not-allowed font-bold ${strength > 2 && strength > 4 ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-400/50" : ""}`}>Strong</li>
          </ul>
        </div>
        <button className='bg-[#111827] text-white w-1/2 h-[50px] rounded-full font-bold uppercase text-xl hover:cursor-pointer hover:shadow-xl hover:shadow-black-500/20 tracking-wider'>Sign Up</button>
        <p className='capitalize text-white font-bold text-xs tracking-wider'>Already Have Account ? <Link className='hover:border-b pb-[2px] hover:cursor-pointer' to='/'>Login</Link></p>
      </form>
      {
        showerror && (
          <div className={`absolute bottom-[1%] right-[1%] bg-red-500 p-4 rounded-2xl font-bold text-white text-[10px] transition-all ${showerror ?
            "translate-x-0" :
            "translate-x-[200px] opacity-0"
            } `}>
            Enter Valid User Name Or Password
          </div>
        )
      }
    </div >
  )
}

export default Signup
