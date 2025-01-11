import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('');  //two way binding
    const [password, setPassword] = useState('');

    const [userData, setUserData] = useState({});

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-6 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-24 mb-6' src={logo} alt='logo'/>
            <form onSubmit={formSubmitHandler}>
                <h3 className='mb-2 text-lg font-medium'>
                    What's your email?
                </h3>
                <input 
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    value={email}  
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type='email' 
                    required 
                    placeholder='Enter your email'
                />
                <h3 className='mb-2 text-lg font-medium'>
                    What's your password?
                </h3>
                <input 
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    type='password' 
                    required 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button className='bg-[#0891b2] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                    Login
                </button>

            </form>
                <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600 hover:underline transition'>Create new account</Link></p>
        </div>
        <div>
            <Link to='/wheelman-login' className='flex items-center justify-center bg-[#4c1d95] font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as Wheelman
            </Link>
        </div>
    </div>
  )
}

export default UserLogin;