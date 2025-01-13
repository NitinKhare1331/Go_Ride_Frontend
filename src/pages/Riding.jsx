import React from "react";
import map from "../assets/map.jpg";
import car from '../assets/car.png'
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img className="w-full h-full object-cover" src={map} alt="img" />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-[100px]" src={car} />
          <div className="text-right">
            <h2 className="text-lg font-medium">Amit</h2>
            <h4 className="font-semibold text-xl -mt-1 -mb-1">UP26 NT 1258</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Swift Dezire</p>
          </div>
        </div>

        <div className="gap-2 flex flex-col justify-between items-center">
          <div className="w-full mt-5">
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
        <button className='w-full bg-green-700 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
