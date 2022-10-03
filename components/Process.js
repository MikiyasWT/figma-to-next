import React from 'react'
import Image from 'next/Image'

function Process({groups}) {
  return (
    <div className='sm:flex flex-row'>
       
      
       {
         groups && groups?.map((key,group) =>
        (<div className="step flex flex-row h-40 m-4 p-2  rounded-sm border-solid border-l-neutral-600 text-justify flex-nowrap" key={key}>
          <div className='iconContainer h-40 object-contain mr-5' >
             <Image  src={group.iconPath} width={250} height={260} />
          </div>
          <div className='stepDetail flex flex-col h-40 '>
             <div className='flex flex-row justify-between'>
                <h1 className='font-bold whitespace-nowrap space-x-10'>{group.title}</h1>
                <a className="text-blue-600 font-bold underline text-justify whitespace-nowrap float-right">{group.link}</a>
             </div>
             <div>
                <p className='font-semibold'>{group.note}</p>
             </div>
          </div>
        </div>

     ))}
    </div>
  )
}

export default Process