

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowUpLong, FaLocationDot, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { faBars, faTimes, faSearch, faPhoneAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Style from "./Navbar.module.css";
import Trust from "./Trust"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={Style.main}>
        <nav className="  max-w-[94%]  mx-auto p-6 ">
          <div className="flex items-center justify-between mt-8">
            <div className="logo ">
            <img
                className="w-72"
                src="https://alltechvirtual.io/wp-content/uploads/2024/02/svg-logo-1024x185.png"
                alt=""
              />
            </div>
            <div className="hidden lg:flex space-x-8 rounded-full p-3 shadow-inner shadow-slate-800 font-normal lg:font-xl md:text-lg 2xl:font-medium bg-slate-300" >
              <li className="list-none">
                <NavLink
                  className="lg:ml-5 lg:mr-5 hover:bg-orange-600 hover:p-2 hover:pl-12 hover:pr-12 hover:text-white hover:rounded-full"
                  to="/home"
                  activeClassName="text-yellow-500"
                >
                  Home
                </NavLink>
              </li>
              <li className="list-none">
                <NavLink
                  className="lg:ml-5 lg:mr-5 hover:bg-orange-600 hover:p-2 hover:pl-12 hover:pr-12 hover:text-white hover:rounded-full"
                  to="/about"
                  activeClassName="text-yellow-500"
                >
                  About
                </NavLink>
              </li>
              <li className="list-none">
                <NavLink
                  className="lg:ml-5 lg:mr-5 hover:bg-orange-600 hover:p-2 hover:pl-12 hover:pr-12 hover:text-white hover:rounded-full"
                  to="/contact"
                  activeClassName="text-yellow-500"
                >
                  Contact
                </NavLink>
              </li>
              <li className="list-none">
                <NavLink
                  className="lg:ml-5 lg:mr-5 hover:bg-orange-600 hover:p-2 hover:pl-12 hover:pr-12 hover:text-white hover:rounded-full"
                  to="/services"
                  activeClassName="text-yellow-500"
                >
                  Services
                </NavLink>
              </li>
            </div>
            <div className="hidden lg:flex space-x-8 ">
              <div className="bg-orange-500 p-3 rounded-full font-normal text-lg hover:text-white flex  items-center ">
               
                <button className='"bg-orange-500 pl-3 pr-3 rounded-full   text-lg hover:text-white flex  items-center font-medium'>Contact Us
                <FaArrowUpLong className="ml-4 rotate-45" />
                {/* <FontAwesomeIcon icon={faPhoneAlt} className="ml-4 " /> */}
                </button>
               
              </div>
              <div className="bg-orange-500 p-3  rounded-full font-normal text-lg hover:text-white flex items-center  ">
              
                <button className='bg-orange-500 pl-3 pr-3 rounded-full font-medium text-lg hover:text-white flex items-center  '>Book a Call
                <FaArrowUpLong className="ml-4 rotate-45" /></button>
                {/* <FontAwesomeIcon icon={faCalendarAlt} className="ml-4" /> */}
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <i onClick={handleToggle} className="cursor-pointer text-white text-2xl">
                {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
              </i>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden flex flex-col items-center mt-6 w-full bg-slate-800 p-4 rounded-md">
              <li className="list-none mb-4  text-center hover:bg-orange-600 hover:text-white hover:rounded-3xl sm:hover:bg-orange-600  sm:hover:p-4 sm:hover:pl-8sm:hover:pr-8 sm:hover:text-white sm:hover:rounded-3xl sm:text-white sm:mt-3">
                <NavLink to="/home" activeClassName="text-yellow-500" onClick={handleToggle}>
                  Home
                </NavLink>
              </li>
              <li className="list-none mb-4  text-center hover:bg-orange-600 hover:text-white hover:rounded-3xl sm:hover:bg-orange-600  sm:hover:p-4 sm:hover:pl-8sm:hover:pr-8 sm:hover:text-white sm:hover:rounded-3xl sm:text-white sm:mt-3">
                <NavLink to="/about" activeClassName="text-yellow-500" onClick={handleToggle}>
                  About
                </NavLink>
              </li>
              <li className="list-none mb-4 text-center hover:bg-orange-600 hover:text-white hover:rounded-3xl sm:hover:bg-orange-600  sm:hover:p-4 sm:hover:pl-8sm:hover:pr-8 sm:hover:text-white sm:hover:rounded-3xl sm:text-white sm:mt-3">
                <NavLink to="/contact" activeClassName="text-yellow-500" onClick={handleToggle}>
                  Contact
                </NavLink>
              </li>
              <li className="list-none mb-4  text-center hover:bg-orange-600 hover:text-white hover:rounded-3xl sm:hover:bg-orange-600  sm:hover:p-4 sm:hover:pl-8sm:hover:pr-8 sm:hover:text-white sm:hover:rounded-3xl sm:text-white sm:mt-3">
                <NavLink to="/services" activeClassName="text-yellow-500" onClick={handleToggle}>
                  Services
                </NavLink>
              </li>
              <div className="bg-orange-500 p-3 rounded-full font-normal text-xl hover:text-white flex items-center mb-4">
                
                <button>Contact Us</button>
                <FontAwesomeIcon icon={faPhoneAlt} className="ml-4" />
              </div>
              <div className="bg-orange-500 p-3 rounded-full font-normal text-xl hover:text-white flex items-center">
                
                <button>Book a Call</button>
                <FontAwesomeIcon icon={faCalendarAlt} className="ml-4" />
              </div>
              <div className="mt-4 w-96">
                <input
                  className="border-2 border-yellow-500 rounded-lg pl-10 py-2 w-full text-black"
                  type="text"
                  placeholder="Search"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 text-black"
                />
              </div>
            </div>
          )}
        </nav>

        <div className=" position-absolute  max-w-[60%] ">
    <h1 className=' text-white mx-auto lg:text-7xl lg:mt-40 lg:ml-32 font-bold ml-4 text-md '>
    Custom Web2 & Web3 Application development
    </h1>
    <p className='mt-4 text-white block  lg:mt-6 lg:ml-32 font-medium ml-4 text-md'>
    Alltech virtual is proud to be your trusted partner in bringing digital products to life.
    </p>
</div>
      </header>
      <Trust/>
    </>
  );
};

export default Navbar;
