import React from 'react'
import car from '../assets/car.png'

const WaitingForWheelmanPanel = ({waitingForWheelman}) => {
  return (
    <div>
      <div>
            <h5
              className="p-1 text-center w-[93%] absolute top-0"
              onClick={() => {
                waitingForWheelman(false);
              }}
            >
              <i className="text-xl ri-arrow-down-wide-line"></i>
            </h5>

            <div className='flex items-center justify-between'>
              <img className='h-[100px]' src={car}/>
              <div className='text-right'>
                <h2 className='text-lg font-medium'>Amit</h2>
                <h4 className='font-semibold text-xl -mt-1 -mb-1'>UP26 NT 1258</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Swift Dezire</p>
              </div>
            </div>

            <div className="gap-2 flex flex-col justify-between items-center">
              <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-3 border-b-2">
                  <i className="ri-user-location-line"></i>
                  <div className="">
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">
                      Shalimar estates, Lucknow
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-3 border-b-2">
                  <i className="text-lg ri-map-pin-line"></i>
                  <div className="">
                    <h3 className="text-lg font-medium">C-126/453</h3>
                    <p className="text-sm -mt-1 text-gray-600">
                      Jankipuram Extension, Lucknow
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5  p-3">
                  <i className="ri-money-rupee-circle-line"></i>
                  <div className="">
                    <h3 className="text-lg font-medium">₹ 193.20</h3>
                    <p className="text-sm -mt-1 text-gray-600">Cash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default WaitingForWheelmanPanel;