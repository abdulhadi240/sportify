import Image from 'next/image'
import React from 'react'

const HeaderImage = ({title}) => {
  return (
    <div className="h-64 overflow-hidden bg-white">
    <div className="relative w-full h-72">
      <Image
        src={"/bg-stand.webp"}
        priority
        layout="fill"
        objectFit="cover"
        alt="bg"
        className="mt-5 opacity-75"
      />
      <div className="absolute bottom-0 right-0 z-50 w-screen h-32 gradient bg-gradient-to-b from-transparent via-white/70 to-white" />
    </div>

    <div className="absolute inset-0 flex justify-center items-center">
      <div className="text-primary1 -mt-56 font-black text-4xl">
        {title}
      </div>
    </div>
  </div>
  )
}

export default HeaderImage