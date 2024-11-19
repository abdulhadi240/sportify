import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Image src={"/image1.webp"} height={200} width={200} alt="gallery" />
        <Image src={"/image2.webp"} height={400} width={400} alt="gallery" />
        <Image src={"/image22.webp"} height={200} width={200} alt="gallery" />
      </div>
      <div className="flex gap-3">
        <Image src={"/image23.webp"} height={200} width={200} alt="gallery" />
        <div className="flex flex-col gap-3">
          <Image src={"/image24.webp"} height={250} width={250} alt="gallery" />
          <Image src={"/image25.webp"} height={250} width={250} alt="gallery" />
        </div>
        <Image src={"/image26.webp"} height={350} width={350} alt="gallery" />
      </div>
      <div className="flex gap-3">
        <Image src={"/image27.webp"} height={200} width={200} alt="gallery" />
        <Image src={"/image33.webp"} height={400} width={400} alt="gallery" />
        <Image src={"/image31.webp"} height={200} width={200} alt="gallery" />
      </div>
    </div>
  );
};

export default Gallery;
