import BookingForm from '@/components/BookingForm'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Suspense fallback={'loading ...'}>
        <BookingForm/>
        </Suspense>
        <div className="flex justify-center">
      <Gallery/>
      </div>
      <div>
        <Testimonial/>
    </div>
    </div>
  )
}

export default page