import React from 'react'

const LocationSearchPanel = ({setPanelOpen, setVehiclePanelOpen}) => {

    // sample array of locations

    const locations = [
        "24B, 2nd Floor, Jalan 1/27B, Wilayah Persekutuan Kuala Lumpur",
        "24A, 2nd Floor, Jalan 1/27B, Wilayah Persekutuan Kuala Lumpur",
        "24Q, 2nd Floor, Jalan 1/27B, Wilayah Persekutuan Kuala Lumpur",
        "24C, 2nd Floor, Jalan 1/27B, Wilayah Persekutuan Kuala Lumpur"
    ]

  return (
    <div>
        {/* this is just a sample data */}

        {
            locations.map((element, idx)=> {
                return (
                    <div key={idx} onClick={() => {setVehiclePanelOpen(true); setPanelOpen(false)}} className='flex items-center justify-start gap-4 my-2 border-2 p-3 rounded-xl border-gray-50 active:border-black'>
                        <h2 className='bg-[#eeeeee] h-8 flex items-center justify-center w-12 rounded-full'>
                            <i className="ri-map-pin-line"></i>
                        </h2>
                        <h4 className='font-medium'>
                            {element}
                        </h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LocationSearchPanel;