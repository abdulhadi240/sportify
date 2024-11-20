import React from 'react'
import Testimonial_Card from './Testimonial_Card'

const Testimonial = () => {
  return (
    <div className='mt-16'>
        <h5 className='flex justify-center text-xs font-bold tracking-wide uppercase text-primary1'>Testimonials</h5>
        <h1 className='flex justify-center  font-medium tracking-tight text-black uppercase text-[40px]'>
        WHAT THEY SAID ABOUT MAIDAN
        </h1>
        <div className='flex justify-center gap-4 mt-16'>
        <Testimonial_Card/>
        <Testimonial_Card/>
        <Testimonial_Card/>
        </div>
    </div>
  )
}

export default Testimonial