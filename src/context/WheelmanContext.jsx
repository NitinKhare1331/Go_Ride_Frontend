import React, { createContext, useState } from 'react'

export const WheelmanDataContext = createContext();

const WheelmanContext = ({ children }) => {

    const [ wheelman, setWheelman ] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    });
  return (
    <WheelmanDataContext.Provider value={{ wheelman, setWheelman }}>
        {children}
    </WheelmanDataContext.Provider>
  )
}

export default WheelmanContext;