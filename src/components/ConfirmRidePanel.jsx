import React from 'react'
import car from '../assets/car.png'
import bike from '../assets/bike.png'
import auto from '../assets/auto.png'


const ConfirmRidePanel = ({setVehicleFound, setConfirmRidePanel}) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {setVehiclePanelOpen(false)}}>
        <i className="text-xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>
        Confirm your Ride
      </h3>
      <div className='gap-2 flex flex-col justify-between items-center'>
        <img className='h-32' src={car}/>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="ri-user-location-line"></i>
            <div className=''>
              <h3 className='text-lg font-medium'>
                562/11-A
              </h3>
              <p className='text-sm -mt-1 text-gray-600'>
                Shalimar estates, Lucknow
              </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-line"></i>
            <div className=''>
              <h3 className='text-lg font-medium'>
                C-126/453
              </h3>
              <p className='text-sm -mt-1 text-gray-600'>
                Jankipuram Extension, Lucknow
              </p>
            </div>
          </div>
          <div className='flex items-center gap-5  p-3'>
          <i className="ri-money-rupee-circle-line"></i>
            <div className=''>
              <h3 className='text-lg font-medium'>
              ₹ 193.20
              </h3>
              <p className='text-sm -mt-1 text-gray-600'>
                Cash
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => {setVehicleFound(true); setConfirmRidePanel(false)}} className='w-full mt-5 bg-green-700 text-white font-semibold p-2 rounded-lg'>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ConfirmRidePanel;