import React from 'react'
import logo from '../assets/logo.png'
import home_image from '../assets/home_image.jpg'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center h-screen pt-3 w-full flex flex-col justify-between' style={{ backgroundImage: `url(${home_image})` }}>
            <img className='w-24 ml-[270px]' src={logo} alt='logo'/>
            <div className='bg-white py-5 px-4 pb-7'>
                <h2 className='text-2xl font-bold'>
                    Get Started with Go Ride
                </h2>
                <Link to='/login' className='flex items-center justify-center text-white w-full font-semibold bg-[#0891b2] py-3 rounded mt-5'>
                    Continue
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Start;