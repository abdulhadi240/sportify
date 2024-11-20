import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#e5dcec] w-full h-auto ~px-4/16'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-3'>
        <div className="text text-[50px] w-full leading-tight font-bold tracking-wide">
            <h1>Start Organizing Your Tournaments</h1>
        </div>
        <div className="btn">
        <button className="h-auto py-2 text-sm text-white rounded-full w-44 bg-primary1">Call For Tournament</button>
        </div>
        </div>
        <div className="iamge">
            <Image src={'/Vector.webp'} width={900} height={900} alt='vector' className='my-5'/>
        </div>
        </div>
    </div>
  )
}

export default Banner