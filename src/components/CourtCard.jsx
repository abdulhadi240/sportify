import Image from 'next/image'
import React from 'react'

const CourtCard = ({image , tag , title , price}) => {
  return (
    <div className='w-64 h-auto p-2 bg-white shadow-xl rounded-xl border-[1px] group transition-all hover:border-primary  '>
        <div className="image">
            <Image src={image} width={250} height={250} alt='court_image' className='p-2 transition-all rounded-3xl group-hover:scale-105 '/>
        </div>
        <div className="flex flex-col gap-3 px-2 pb-3 text">
            <div>
            <p className='text-xs text-black/60'>{tag}</p>
            <h1 className='font-bold tracking-wider uppercase'>{title}</h1>
            <h4 className='text-xs font-bold text-primary'>{price}</h4>
            </div>
            <button className="w-24 h-auto py-1 text-xs text-white rounded-full bg-primary hover:bg-primary/80">Book Now</button>
        </div>
    </div>
  )
}

export default CourtCard