import ContactForm from "@/components/ContactForm";
import HeaderImage from "@/components/HeaderImage";
import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Page = () => {
  return (
    <>
      <HeaderImage title={'CONTACT'}/>
      <div>
        <ContactForm/>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-wrap  gap-4 justify-between bg-white p-8 rounded-b-xl space-y-4 md:space-y-0">
          {/* Office Info */}
          <div className="flex-1 bg-[#faf8fc] p-6 rounded-lg shadow-md">
            <div className="flex justify-start">
            <div className="text-primary1 w-6 h-6 rounded-full scale-150 bg-white flex justify-center items-center">
                <IoLocation/>
            </div>
            </div>
            <h2 className="text-xl mt-2 font-semibold mb-2 flex items-center">
              Office
            </h2>
            <p className="text-sm text-gray-600">
              Kashmir road, jail chorangi, Karachi, Pakistan
            </p>
          </div>
          {/* Email Info */}
          <div className="flex-1 bg-[#faf8fc] p-6 rounded-lg shadow-md">
          <div className="flex justify-start">
            <div className="text-primary1 w-6 h-6 rounded-full scale-150 bg-white flex justify-center items-center">
                <MdEmail/>
            </div>
            </div>
            <h2 className="text-xl mt-2 font-semibold mb-2 flex items-center">
              Email
            </h2>
            <p className="text-sm text-gray-600">
              booking@example.com <br />
              info@example.com <br />
              careers@example.com
            </p>
          </div>
          {/* Call Info */}
          <div className="flex-1 bg-[#faf8fc] p-6 rounded-lg shadow-md">
          <div className="flex justify-start">
            <div className="text-primary1 w-6 h-6 rounded-full scale-150 bg-white flex justify-center items-center">
                <IoCall/>
            </div>
            </div>
            <h2 className="text-xl mt-2 font-semibold mb-2 flex items-center">
              Call
            </h2>
            <p className="text-sm text-gray-600">+92 123 4567891</p>
          </div>
        </div>
    </>
  );
};

export default Page;
