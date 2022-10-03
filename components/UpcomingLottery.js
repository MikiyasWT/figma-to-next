import Image from 'next/Image'
import React from 'react'
import { US } from 'country-flag-icons/react/3x2'
import {Lotteries} from '../lib/lotteries'


function UpcomingLottery() {
  return (
      <div className='my-10 ml-2'>
        <h1 className=' font-bold text-center m-5'>
            BIGGEST UPCOMING LOTTERY DRAWS
        </h1>
      {
        Lotteries && Lotteries.map((lottery) => (
          <div className='upcomingLottery flex flex-col mt-5'>
          <div className='flex flex-row'>
             <div className='iconContainer rounded-lg mx-10 mb-4 items-center'>
                <Image src={lottery.iconPath} width={100} height={100} />
             </div>

             <div className="mx-10 px-10">
              <div className='flex flex-row justify-between '>
              {lottery.countryIcon}<h2 className="text-2xl">Mega Draws</h2>
              </div>
             
             <h1 className='text-green-700 text-4xl font-semibold whitespace-nowrap'>${lottery.netWorth}</h1>
             </div>
          </div>

          <div className='playNow bg-blue-900 flex flex-row h-20 justify-between rounded-bl-lg'>
              <button className='bg-yellow-500 h-9 w-200 mx-6 my-6 px-6 m-2 rounded-md text-black text-xl font-bold'>Play Now</button>
              
             <div className='flex flex-row h-9 mx-10 px-20 pl-0 ml-0 py-5 '>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10 float-right">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             <h3 className='text-white text-2xl'>{lottery.time}</h3>
             </div>
             
             
          </div>  
        </div>
          
        ))
      }
        
      </div>
  )
}

export default UpcomingLottery