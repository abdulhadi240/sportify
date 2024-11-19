import React from 'react'
import CourtCard from './CourtCard'

const Grounds = () => {
  return (
    <div>
        <h1 className='flex justify-center my-6 text-2xl font-bold text-center'>Our Courts</h1>
        <div className='flex justify-center gap-10'>
        <CourtCard image={'/court1.webp'} tag={'Cricket + Futsal'} title={'padel court'} price={'Rs: 5000'}/>
        <CourtCard image={'/court1.webp'} tag={'Cricket + Futsal'} title={'padel court'} price={'Rs: 5000'}/>
        <CourtCard image={'/court1.webp'} tag={'Cricket + Futsal'} title={'padel court'} price={'Rs: 5000'}/>
        </div>
    </div>
  )
}

export default Grounds