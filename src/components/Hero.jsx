import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 w-screen h-80">
        <Image
          src={"/bg-stand.webp"}
          priority
          layout="fill"
          objectFit="cover"
          alt="bg"
          className="md:mt-44"
        />
      </div>
      <div className="md:-mt-[300px] mx-16 z-50">
      <div className="flex flex-col justify-center md:justify-between md:flex-row">
        <div className="mt-10 text">
          <div className="h-auto uppercase mb-3 text-sm w-80 py-1 bg-[#b79dca] text-white rounded-full px-6 z-50">
            your play , your event , your win
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
            <h1 className="text-[40px] font-bold uppercase tracking-tighter leading-tight font-italic">Your Game, Your Rules- <br /><span className="text-primary1">It’s Time</span> to Level Up <br />and organize <br /><span className="text-primary1">your own tournament</span></h1>
            <p className="max-w-[530px] text-black/60">Creating unforgettable sports experiences one game changing moment at a time! sports experiences one game changing moment at a time!</p>
            </div>
            <button className="h-auto px-6 py-1 text-white rounded-full w-44 bg-primary1">Book Now</button>

          </div>

        </div>

        <div className="flex flex-row-reverse ">
          <div className="z-20 -mt-0 -ml-28 ">
            <Image
              src={"/cricket.webp"}
              priority
              width={280}
              height={280}
              alt="player"
            />
          </div>
          <div className="z-10 mt-6">
            <Image
              src={"/foot.webp"}
              priority
              width={200}
              height={200}
              alt="player"
            />
          </div>
        </div>
       <div className="gradient w-[730px] h-[150px] absolute z-0 bottom-10 right-0 bg-[#cfbedc] opacity-75 blur-2xl rounded-full" />
       <div className="absolute bottom-0 right-0 z-50 w-screen h-32 gradient bg-gradient-to-b from-transparent via-white/70 to-white" />

      </div>
      </div>
    </div>
  );
};

export default Hero;
