import React from 'react'
import car from '../assets/car.png'
import bike from '../assets/bike.png'
import auto from '../assets/auto.png'

const VehiclePanel = ({setVehiclePanelOpen, setConfirmRidePanel}) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {setVehiclePanelOpen(false)}}>
                <i className="text-xl ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>
            Choose a vehicle
            </h3>
            <div onClick={() => {setConfirmRidePanel(true)}} className='p-3 border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between'>
                    <img className='h-12' src={car}/>
                    <div className='w-1/2 ml-6'>
                        <h4 className='font-medium text-base'>Go Cab<span><i className="ri-user-6-line"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>
                        Afordable car ride
                        </p>
                    </div>
                    <h2 className='text-lg font-semibold'>
                        ₹ 193.20
                    </h2>
            </div>
    
            <div onClick={() => {setConfirmRidePanel(true)}} className='p-3 border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between'>
                    <img className='h-12' src={bike}/>
                    <div className='w-1/2 ml-2'>
                        <h4 className='font-medium text-base'>Go Bike<span><i className="ri-user-6-line"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>
                        Afordable bike ride
                        </p>
                    </div>
                    <h2 className='text-lg font-semibold'>
                        ₹ 65.89
                    </h2>
            </div>
    
            <div onClick={() => {setConfirmRidePanel(true)}} className='p-3 border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between'>
                    <img className='h-12' src={auto}/>
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>Go Auto<span><i className="ri-user-6-line"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>5 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>
                        Afordable auto ride
                        </p>
                    </div>
                    <h2 className='text-lg font-semibold'>
                        ₹ 121.30
                    </h2>
            </div>
        </div>
    )
}

export default VehiclePanel;