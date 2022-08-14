import React from "react";
import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";

const TrendingImg = ({ trendImg }) => {
  return (
    <div className="relative">
      <Image src={trendImg} alt="" className="w-full h-full" layout="responsive" />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/70 group">
        <div className="text-gray-300 hidden group-hover:block cursor-pointer">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-md">Watch this</p>
            <BiPlayCircle size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingImg;
