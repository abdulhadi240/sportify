import HeaderImage from "@/components/HeaderImage";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <HeaderImage title={"EVENTS"} />
      </div>
      <div className="flex justify-center mb-20">
        <div className="iamge bg-[#faf8fc] flex">
            <Image src={'/event1.png'} width={400} height={400} alt="images" className=" rounded-l-xl"/>
            <div className="w-[600px]">
                
            </div>
        </div>
      </div>
      <div className="flex justify-center gap-20">
      <div className="grid grid-cols-3 justify-center gap-10">
      <div className="">
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      <div>
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      <div>
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      <div>
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      <div>
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      <div>
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      <div>
        <Image src={"/event1.png"} width={300} height={300} alt="iamge" className="rounded-2xl"/>
      </div>
      </div>
      </div>
    </>
  );
};

export default page;
