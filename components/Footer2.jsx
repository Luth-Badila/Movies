import React from "react";
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div id="contactus" className=" bg-gradient-to-b from-red-700 to-black h-auto text-white">
      <div className="flex items-center justify-center p-10">
        <div className="flex flex-col lg:flex-row lg:gap-[3rem] gap-3">
          <div className="flex lg:gap-8 gap-[4rem]">
            <div className="flex flex-col gap-2">
              <div>Follow Us</div>
              <div className="flex gap-2">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div>Contact Us :</div>
              <div className="flex flex-col">
                <div>032984672367</div>
                <div>075875078578</div>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <div>Help Center:</div>
              <div className="flex flex-col">
                <div>032984672367</div>
                <div>075875078578</div>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Media Center</p>
              <p>Terms of Use</p>
              <p>Jobs</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
