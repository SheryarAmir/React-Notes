import React from "react";
import {
  FaArrowUpLong,
  FaLocationDot,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { PiXLogoLight } from "react-icons/pi";
import { MdLocalPhone } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="parent w-full relative pt-40 mt-32">
        <img
          className="w-full h-[65vh] object-cover "
          src="https://alltechvirtual.io/wp-content/uploads/2024/02/orizonjpg-032.jpg"
          alt=""
        />

        <div className="footer absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] pb-24 ">
          <div className="inner-footer  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-32 text-center lg:text-left ">
            <div>
              <img
                className="w-full mb-6 "
                src="https://alltechvirtual.io/wp-content/uploads/2024/02/svg-logo-1024x185.png"
                alt=""
              />
              <div className="flex justify-start space-x-3">
                <button className="border rounded-full bg-white text-black text-4xl p-2">
                  <TiSocialLinkedinCircular />
                </button>
                <button className="border rounded-full bg-white text-black text-4xl p-2">
                  <CiFacebook />
                </button>
                <button className="border rounded-full bg-white text-black text-4xl p-2">
                  <FaInstagram />
                </button>
                <button className="border rounded-full bg-white text-black text-4xl p-2">
                  <CiYoutube />
                </button>
                <button className="border rounded-full bg-white text-black text-4xl p-2">
                  <PiXLogoLight />
                </button>
              </div>
            </div>

            <div className="text-white ml-20  ">
              <h1 className="font-bold text-3xl mb-4 tracking-widest ">
                Services
              </h1>
              <ul className="space-y-3">
                <li className="text-xl text-gray-300 tracking-widest ">
                  UX/UI Product Design
                </li>
                <li className="text-xl text-gray-300 tracking-widest ">
                  Web Development
                </li>
                <li className="text-xl text-gray-300 tracking-widest ">
                  Mobile Application
                </li>
                <li className="text-xl text-gray-300 tracking-widest ">
                  Web3 Development
                </li>
                <li className="text-xl text-gray-300 tracking-widest ">
                  Maintenance & Support
                </li>
              </ul>
            </div>

            <div className="text-white ml-8 tracking-widest ">
              <h1 className="font-bold text-3xl mb-4">Contact us</h1>
              <ul className="space-y-2 text-lg text-gray-300">
                <li className="flex items-center justify-center lg:justify-start">
                  <FaLocationDot className="mr-2 text-xl" /> Scottsdale, Arizona
                </li>
                <li className="flex items-center justify-center lg:justify-start tracking-widest  ">
                  <MdLocalPhone className="mr-2 text-xl" /> 602-565-4789
                </li>
                <li className="flex items-center justify-center lg:justify-start tracking-widest  ">
                  <FaEnvelope className="mr-2 text-xl" />{" "}
                  team@alltechvirtual.com
                </li>
              </ul>
            </div>

            <div className="searchbar">
              <h1 className=" font-sans font-bold text-3xl text-white  tracking-widest  ">
                Stay Updated with Latest News
              </h1>

              <input
                className=" mt-4 text-2xl p-3 rounded-lg"
                type="text"
                placeholder="email"
              />
              <button className="bg-orange-500 p-4 rounded-xl mt-6   font-medium text-lg hover:text-white flex  items-center ">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        <div className="w-full child absolute top-0 ">
          <div className="container mx-auto bg-gray-950 rounded-xl p-6 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <img
                className="w-full lg:w-[35%] mb-6 lg:mb-0 transition-transform duration-300 transform hover:scale-75 hover:rounded-xl"
                src="https://alltechvirtual.io/wp-content/uploads/2024/02/orizonjpg-026.jpg"
                alt=""
              />

              <div className="textbuttons text-center lg:text-left lg:ml-12 mt-6 lg:mt-0">
                <h1 className="text-white text-3xl lg:text-6xl font-bold leading-snug">
                  Empower Your Business with us Today!
                </h1>

                <div className="flex flex-col lg:flex-row mt-16 space-y-4 lg:space-y-0 lg:space-x-4">
                  <button className="bg-orange-500 px-6 py-3 rounded-full font-medium text-lg hover:text-white flex items-center justify-center">
                    Contact Us
                    <FaArrowUpLong className="ml-4 rotate-45" />
                  </button>
                  <button className="bg-orange-500 px-6 py-3 rounded-full font-medium text-lg hover:text-white flex items-center justify-center">
                    Contact Us
                    <FaArrowUpLong className="ml-4 rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
