import React from 'react'
import Image from 'next/Image'

function Process({step}) {
  return (
    <div>
       {
        step?.map((key,stepi) => (
           console.log(stepi.title)
        ))

        
       }
        <div className="step flex flex-row h-40 m-4 p-2  rounded-sm border-solid border-l-neutral-600">
          <div className='iconContainer h-20 object-contain' >
             <Image  src="/../public/buy-ticket.jpg" width={340} height={260} />
          </div>
          <div className='stepDetail flex flex-col h-40 '>
             <div className='flex flex-row justify-between '>
                <h1 className='font-bold'>You PICK</h1>
                <a className="text-blue-600 font-bold underline ">Play NOW</a>
             </div>
             <div>
                <p className='font-semibold'>
                Someone in BC is ready for retirement after taking home a MASSIVE lottery jackpot — all thanks to the lotto subscription she set up online.


                </p>
             </div>
          </div>
        </div>

    </div>
  )
}

export default Process