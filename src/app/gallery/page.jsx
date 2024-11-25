import Gallery from "@/components/Gallery";
import HeaderImage from "@/components/HeaderImage";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderImage title={'GALLERY'}/>
      <div className="flex justify-center">
        <Gallery />
      </div>
      <div className="flex justify-center">
        <Gallery />
      </div>
      <div>
        <Testimonial/>
      </div>
    </>
  );
};

export default page;
