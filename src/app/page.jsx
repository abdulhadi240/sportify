import Banner from "@/components/Banner";
import BookingForm from "@/components/BookingForm";
import Choose from "@/components/Choose";
import Gallery from "@/components/Gallery";
import Grounds from "@/components/Grounds";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className=""> 
      <Hero/>
      <div className="my-16">
      <Grounds/>
      </div>
      <Banner/>
      <Choose/>
      <div className="flex justify-center">
      <Gallery/>
      </div>
      <div>
        <Testimonial/>
      </div>
      
    </div>
  );
}
