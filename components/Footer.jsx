import React from "react";
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contactus" className=" bg-gradient-to-b from-red-700 to-black h-auto text-white">
      <div className="flex items-center justify-center p-10">
        <div className="flex gap-[10rem]">
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
          <div className="flex flex-col gap-2">
            <div>Contact Us :</div>
            <div>032984672367</div>
            <div>075875078578</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Help Center :</div>
            <div>032984672367</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Media Center</div>
            <div>Terms of Use</div>
            <div>Jobs</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
