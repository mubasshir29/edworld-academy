import Image from "next/image";
import React from "react";

const Tajweed = () => {
  return (
    <div className=" p-12">
      <div className="relative w-full h-[540px]">
        <Image src="/quran.jpg" fill objectFit="cover"></Image>
        <h2 className="absolute left-8 top-1/2 -translate-y-1/2 text-myBackground text-6xl font-bold">
          QURAN WITH
          <br /> <span className="text-myYellow">TAJWEED</span>
        </h2>
      </div>
    </div>
  );
};

export default Tajweed;
