import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { WheelmanDataContext } from '../context/WheelmanContext';
import axios from 'axios';

const WheelmanProtectedWrapper = ({children}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {wheelman, setWheelman} = useContext(WheelmanDataContext);
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() =>{
        if(!token) {
            navigate('/wheelman-login');
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/wheelman/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setWheelman(response.data.wheelman)
                setIsLoading(false)
            }
        }).catch(err => {

            localStorage.removeItem('token')
            navigate('/wheelman-login')
        })

    }, [token]);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

  return (
    <>
        {children}
    </>
  )
}

export default WheelmanProtectedWrapper;