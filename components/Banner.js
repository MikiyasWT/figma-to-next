import React from 'react'
import Image from 'next/Image'

function Banner() {
  return (
    <div className='mt-4 mb-5'>
        <Image layout='responsive' src="/../public/smart-winners.jpg" width={640} height={200} />
    </div>
  )
}

export default Banner