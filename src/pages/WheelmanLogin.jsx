import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { WheelmanDataContext } from '../context/WheelmanContext';
import axios from 'axios';

const WheelmanLogin = () => {
    const [email, setEmail] = useState('');  //two way binding
    const [password, setPassword] = useState('');

    const { wheelman, setWheelman } = useContext(WheelmanDataContext);
    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const wheelman = ({
            email: email,
            password: password
        });

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/wheelman/login`, wheelman);

        if(response.status === 200) {
            const data = response.data;
            setWheelman(data.wheelman);
            localStorage.setItem('token', data.token);
            navigate('/wheelman-home');
        }

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
                <button className='bg-[#4c1d95] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                    Wheelman Login
                </button>

            </form>
                <p className='text-center'>New here? <Link to='/wheelman-signup' className='text-blue-600 hover:underline transition'>Register as Wheelman</Link></p>
        </div>

        <div>
            <Link to='/login' className='flex items-center justify-center bg-[#0891b2] font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default WheelmanLogin;