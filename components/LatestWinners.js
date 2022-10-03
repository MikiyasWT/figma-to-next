import { US,GE,ET,DE } from 'country-flag-icons/react/3x2'
import Image from 'next/Image'
import React from 'react'
import {Winners} from '../lib/latestWinners'

function LatestWinners() {
  return (
    <div className='mb-10 mx-2'>
        <div className='latestWinners bg-red-600 text-white text-center font-bold text-2xl  rounded-xl'>
            <h1 className='py-6 h-20'>OUR LATEST WINNERS</h1>
        </div>
        <div className='totalPrizesPaidOut text-center border-black border-solid border-2 my-2 rounded-xl border-opacity-5'>
          <h1 className='text-xl font-semibold py-1'>Totalprizes paid out</h1>
          <h1 className='text-2xl font-bold text-green-600 py-1'>US$ {107233768}</h1>
          <h1 className='text-2xl font-bold text-black py-1'>{6975146}{`     `}winning tickets</h1>
        </div>
        <div className='overflow-y-auto '>
        {
        Winners && Winners.map((winner) => (
            <div className='flex flex-row border-black border-solid border-2 my-2 rounded-xl border-opacity-5'>
            <div className='winnerIconContainer mx-10'>
              <Image src={"/../public/gold-treasure.png"} width={100} height={100} />
            </div>
            <div>
              <h3 className='text-lg font-semibold py-1'>{winner.date}</h3>
              <p className='flex flex-row text-2xl font-bold text-black py-1'>{winner.countryIcon}{`    `}{winner.dateinMonth}</p>
              <h3 className='text-lg  py-1'>{winner.coordinates}</h3>
            </div>
          </div>
            ))
        }
        </div>
      
    </div>
  )
}

export default LatestWinners