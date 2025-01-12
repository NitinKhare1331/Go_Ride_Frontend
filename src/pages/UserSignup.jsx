import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ userData, setUserData ] = useState({})

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserDataContext);


    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if(response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-6 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-24 mb-6' src={logo} alt='logo'/>
            <form onSubmit={formSubmitHandler}>
                <h3 className='mb-2 text-base font-medium'>
                    What's your name?
                </h3>
                <div className='flex gap-4 mb-5'>
                    <input 
                        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-medium placeholder:text-sm'
                        type='text' 
                        required
                        placeholder='Firstname'
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <input 
                        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-medium placeholder:text-sm' 
                        type='text' 
                        required
                        placeholder='Lastname'
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>
                <h3 className='mb-2 text-base font-medium'>
                    What's your email?
                </h3>
                <input 
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-medium placeholder:text-sm' 
                    type='email' 
                    required 
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <h3 className='mb-2 text-base font-medium'>
                    Enter password
                </h3>
                <input 
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-medium placeholder:text-sm' 
                    type='password' 
                    required 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button className='bg-[#0891b2] font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                    Signup
                </button>

            </form>
                <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600 hover:underline transition'>Login</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default UserSignup;