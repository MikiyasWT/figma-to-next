import React from 'react'
import Image from 'next/image'
//import {Bars-4} from "@heroicons/react/outline"

function TabMenu() {
  return (
    <div className='flex flex-col mx-4'>
        <div className='my-6  flex flex-row justify-flex-start justify-between items-center h-30 sm:hidden'>
            <svg className="w-10 h-15  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            <Image className="object-contain " src="/../public/smartwinners.png" width={400} height={60}/>

            <Image className="object-contain rounded-full" src="/../public/contact-icon.png" width={30} height={70}/>
        </div>

        <div className='flex flex-row mx-2 my-4 justify-between'>
         <div>
             <h1 className='color-blue-900 font-bold'>Welcome <bold>Roman -</bold><a className='color-blue-900 font-bold'>Logout</a></h1> 
        </div>
        <div>
        <h1 className='color-blue-900 font-bold'>your balance is - <a className='color-blue-900 font-bold'>485$</a></h1> 
        </div>
    </div>
    </div>
  )
}

export default TabMenu


