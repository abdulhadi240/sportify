import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial_Card = () => {
  return (
    <div>
      <div className="p-6 border-[1px] z-0 rounded-2xl relative w-80">
        <div className="flex items-center justify-center px-1 text-center text-black/60 text">
          Maidan provides all the essential sports facilities. It was an
          absolutely amazing experience.
        </div>
        <div className="text-primary1 bg-white z-50 absolute -top-5 left-[40%] w-8 h-8 border-[1px] items-center flex justify-center rounded-full p-2 ">
          <FaQuoteLeft className="" />
        </div>
      </div>
      <div className="flex justify-center mt-3">
      <div className="flex items-center justify-center gap-2">
        <Image src={"/user.png"} width={40} height={40} alt="user" />
        <h1 className="text-xs font-bold">Asad Khan</h1>
      </div>
      </div>
    </div>
  );
};

export default Testimonial_Card;
