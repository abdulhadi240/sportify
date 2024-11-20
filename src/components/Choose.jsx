import Image from 'next/image'
import React from 'react'

const Choose = () => {
  return (
    <div className='flex items-center justify-center gap-20 py-8'>
    <div className='flex flex-col gap-4'>
        <div className="text-xs font-bold uppercase tag text-primary1">Why choose us?</div>
        <div className="heading font-bold leading-tight text-[32px] tracking-wider">WE ALWAYS PROVIDE <br />BEST GROUND SERVICE</div>
        <div className="w-[450px] text-sm text1">Choose Maidan for Unmatched Excellence: Proud hosts of prestigious events like the Markhor Super League, Airfield Weekend League, and the Islamabad Futsal Series. Join us for top-tier facilities, seamless organization, a winning tradition, and a love for sports like yours – because your sports experience deserves nothing less than the best!</div>
        <br />
        <div className="w-[450px] text-sm text2">Choose Maidan for hassle-free sports fun! From hosting big leagues to local tournaments, we've got the perfect grounds and seamless events. Your game, your way – Maidan makes it easy for everyone to play and enjoy sports effortlessly.</div>
        <button className="h-auto py-2 mt-4 text-sm text-white rounded-full w-36 bg-primary1">Learn more</button>

    </div>
    <div className="image">
        <Image src={'/BG.webp'} width={350} height={350} alt='image' className='my-10'/>
    </div>
    </div>
  )
}

export default Choose