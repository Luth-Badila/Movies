import React from "react";
import TrendingImg from "./TrendingImg";
import IgImg1 from "../public/ig-img-1.jpeg";
import IgImg2 from "../public/ig-img-2.jpeg";
import IgImg3 from "../public/ig-img-3.jpeg";
import IgImg4 from "../public/ig-img-4.jpeg";
import IgImg5 from "../public/ig-img-5.jpeg";
import IgImg6 from "../public/ig-img-6.jpeg";

const Trending = () => {
  return (
    <div className="text-4xl font-bold text-white lg:h-screen h-auto bg-fixed bg-center bg-cover bg-trending-bg">
      <div className="max-w-[1240px] mx-auto text-center pt-2">
        <p className="text-2xl font-bold">Trending films</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
          <TrendingImg trendImg={IgImg1} />
          <TrendingImg trendImg={IgImg2} />
          <TrendingImg trendImg={IgImg3} />
          <TrendingImg trendImg={IgImg4} />
          <TrendingImg trendImg={IgImg5} />
          <TrendingImg trendImg={IgImg6} />
          <TrendingImg trendImg={IgImg5} />
          <TrendingImg trendImg={IgImg6} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
