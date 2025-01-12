import React, { useRef, useState } from 'react'
import logo from '../assets/logo.png'
// import logoA from '../assets/logoA.png'
import car from '../assets/car.png'
import map from '../assets/map.jpg'
import bike from '../assets/bike.png'
import auto from '../assets/auto.png'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function() {
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        padding: 20,
        duration: 0.5
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
        padding: 0,
        duration: 0.5
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-24 left-5 top-5 absolute' src={logo} alt='logo'/>

      <div className='h-screen w-screen'>
        <img className='w-full h-screen object-cover' src={map} alt="img"/>
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 
            className='absolute opacity-0 right-6 top-6  text-2xl'
            onClick={() => {
              setPanelOpen(false);
            }}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>
            Find a trip
          </h4>
          <form onSubmit={formSubmitHandler}>
            <div className="line absolute h-16 w-[3px] top-[45%] left-10 bg-[#0891b2] rounded"></div>
            <input 
              className='bg-[#eeeeee] px-12 py-2 text-medium rounded-lg w-full mt-5 placeholder:text-base' 
              type='text' 
              placeholder='Add pick-up location'
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
            />
            <input 
              className='bg-[#eeeeee] px-12 py-2 text-medium rounded-lg w-full mt-3 placeholder:text-base' 
              type='text' 
              placeholder='Add your destination'
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div className='bg-white h-0 opacity-0' ref={panelRef}>
              <LocationSearchPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bottom-0 p-3 bg-white py-6 px-3'>
        <h3 className='text-2xl font-semibold mb-5'>
          Choose a vehicle
        </h3>
        <div className='p-3 border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between'>
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

        <div className='p-3 border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between'>
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

        <div className='p-3 border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between'>
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
    </div>
  )
}

export default Home;