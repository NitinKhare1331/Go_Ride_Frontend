import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WheelmanLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/wheelman/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        navigate('/wheelman-login');
    })

  return (
    <div>WheelmanLogout</div>
  )
}

export default WheelmanLogout;