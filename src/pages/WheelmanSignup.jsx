import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {WheelmanDataContext} from '../context/WheelmanContext';

const WheelmanSignup = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const navigate = useNavigate();
    const [ vehicleColor, setVehicleColor ] = useState('');
    const [ vehiclePlate, setVehiclePlate ] = useState('');
    const [ vehicleCapacity, setVehicleCapacity ] = useState('');
    const [ type, setType ] = useState('');
    const {wheelman, setWheelman} = useContext(WheelmanDataContext);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const newWheelman = {
            email,
            password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: type
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/wheelman/register`, newWheelman);

        if(response.status === 201) {
            const data = response.data;
            setWheelman(data.wheelman);
            localStorage.setItem('token', data.token);
            navigate('/wheelman-home');
        }
        
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setType('');
    }
  return (
    <div className='p-6 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-24 mb-6' src={logo} alt='logo'/>
            <form onSubmit={formSubmitHandler}>
                <h3 className='mb-2 text-base font-medium'>
                    What's our Wheelman's name?
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
                    What's our Wheelman's email?
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

                <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
                <div className='flex gap-4 mb-7'>
                    <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-medium placeholder:text-sm'
                    type="text"
                    placeholder='Vehicle Color'
                    value={vehicleColor}
                    onChange={(e) => {
                        setVehicleColor(e.target.value)
                    }}
                    />
                    <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-medium placeholder:text-sm'
                    style={{ textTransform: 'none' }}
                    type="text"
                    placeholder='Vehicle Plate'
                    value={vehiclePlate}
                    onChange={(e) => {
                        setVehiclePlate(e.target.value.toUpperCase())
                    }}
                    onInput={(e) => {
                        e.target.style.textTransform = 'uppercase';
                    }}
                    />
                </div>
                <div className='flex gap-4 mb-7'>
                <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-medium placeholder:text-sm'
                type="number"
                placeholder='Vehicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => {
                setVehicleCapacity(e.target.value)
            }}
            />
            <select
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-medium placeholder:text-base'
                value={type}
                onChange={(e) => {
                setType(e.target.value)
            }}
            >
                <option value="" disabled>Select Vehicle</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
            </select>
            </div>


                <button className='bg-[#4c1d95] font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                    Register as wheelman
                </button>

            </form>
                <p className='text-center'>Already have a account? <Link to='/wheelman-login' className='text-blue-600 hover:underline transition'>Login</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default WheelmanSignup;