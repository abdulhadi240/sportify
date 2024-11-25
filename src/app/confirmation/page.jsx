import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="heading flex justify-center text-3xl font-bold mt-16">
      Thank You For booking
      </div>
      <div className='flex flex-col mt-16 gap-3 justify-center items-center'>
      <div className='bg-[#fafafa] p-10 max-w-5xl'>
        <h1 className='flex flex-col gap-3 text-center justify-center text-lg font-bold mb-3'>PLEASE CHECK YOUR EMAIL!</h1>
        <p className='flex justify-center text-center'>Your selected time slots have been tentatively booked at Sportefy Padel Court 2. Please pay the billed amount within 24 hours for booking confirmation. An invoice with booking details and payment methods has been sent to your email address.</p>
        <p className='flex justify-center'>Your Booking Number: <span className='text-primary1 font-bold'>#B-37FBA5</span></p>
        <div className='flex gap-3 justify-center'>
        <Link href={'/booking?court=1&date=1-Nov-2023'} className="h-auto p-2 text-center py-3 mt-4 text-sm text-white rounded-full w-48  bg-secondary1 uppercase">Back To Booking</Link>
        <Link href={'/user/abdulhadi'} className="h-auto p-2 py-3 mt-4 text-sm text-white rounded-full text-center w-48 bg-primary1 uppercase">view booking details</Link>

        </div>
        </div>
        
      </div>
    </div>
  )
}

export default page