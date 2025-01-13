import React, { useRef, useState } from 'react'
import logo from '../assets/logo.png'
// import logoA from '../assets/logoA.png'
import map from '../assets/map.jpg'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRidePanel from '../components/ConfirmRidePanel'
import LookingForDriverPanel from '../components/LookingForDriverPanel'
import WaitingForWheelmanPanel from '../components/WaitingForWheelmanPanel'

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForWheelman, setWaitingForWheelman] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForWheelmanRef = useRef(null);

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
  },[panelOpen]);

  useGSAP(function() {
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehiclePanelOpen]);

  useGSAP(function() {
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [confirmRidePanel])

  useGSAP(function() {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehicleFound])

  useGSAP(function() {
    if(waitingForWheelman){
      gsap.to(waitingForWheelmanRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(waitingForWheelmanRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [waitingForWheelman])

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
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full pt-12 bg-white py-10 px-3'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full pt-12 bg-white py-6 px-3'>
        <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full pt-12 bg-white py-6 px-3'>
        <LookingForDriverPanel setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForWheelmanRef} className='fixed w-full z-10 bottom-0 pt-12 bg-white py-6 px-3'>
        <WaitingForWheelmanPanel waitingForWheelman={waitingForWheelman}/>
      </div>
    </div>
  )
}

export default Home;