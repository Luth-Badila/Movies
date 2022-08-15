import React from "react";
import Image from "next/image";
import hero3 from "../public/hero3.jpg";
import { SuperheroData } from "./SuperheroData";

const Superhero = () => {
  return (
    <div className="h-auto bg-hero5-bg bg-center bg-cover">
      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl text-white font-semibold">Superhero</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {SuperheroData.map((superdata, i) => {
              return (
                <div key={i} className="p-4 flex sm:w-1/2 lg:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image className="lg:h-72 md:h-48 w-full object-cover object-center" src={superdata.image} height="1000px" width="2000px" alt="blog" />
                    <div className="p-6 hover:bg-indigo-700 hover:text-black text-white transition duration-300 ease-in">
                      <h2 className="text-base font-medium text-indigo-300 mb-1">{superdata.date}</h2>
                      <h1 className="text-2xl font-semibold mb-3">{superdata.title}</h1>
                      <p className="leading-relaxed mb-3">{superdata.sinopsis}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-300 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                          Read More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Superhero;
