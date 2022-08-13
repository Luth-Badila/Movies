import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-hero2-bg">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="text-white text-center p-5 z-[2] mt-[8rem]">
        <h2 className="text-5xl font-bold max-w-[800px]">{heading}</h2> {/* Taken from index.jsx*/}
        <p className="py-5 text-xl font-semibold">{message}</p> {/* Taken from index.jsx*/}
        <div className="flex max-w-[100rem]">
          <input className="w-full p-2 outline-none text-black" type="text" placeholder="email kamu" />
          <button className="bg-red-500 text-white border border-red-500 p-3" type="submit">
            Mari Daftar Dulu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
