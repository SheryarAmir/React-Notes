import React from 'react'
import { RiTeamFill } from 'react-icons/ri';
import { FaUserClock } from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6';
import { LuMailSearch } from 'react-icons/lu';
import { MdOutlineSecurity, MdOutlineReduceCapacity } from 'react-icons/md';
import { GrSteps } from 'react-icons/gr';
import { IoIosTimer } from 'react-icons/io';
function Benefits() {
    const boxes=[
        {
            img: <RiTeamFill />  ,
            skills:"Skilled Professionals"
        },
        {
            img: <FaUserClock />  ,
            skills:" In-Person Consultations"
        },
        {
            img: <FaChalkboardUser/>  ,
            skills:" Interaction"
        },
        {
            img: <LuMailSearch />   ,
            skills:"  Precision"
        },
        {
            img:  <MdOutlineSecurity />   ,
            skills: " Security and Regulations"
        },
        {
            img: <MdOutlineReduceCapacity /> ,
            skills:" Versatile Capabilities"
        },
        {
            img: <GrSteps /> ,
            skills:" Versatile Capabilities"
        },
        {    
            img: <IoIosTimer />  ,
            skills:" Reliable Performance"
        },
    ]

    
  
  return (

    <>
   
      <h1 className=' text-center mx-auto font-bold text-7xl font-sans mt-32  '>Benefits Of Working With Us</h1>

      <div className=" container grid grid-cols-1 md:grid-cols-4 gap-3 text-centeritems-center mx-auto mt-16   ">
      {boxes.map((box, index) => (
        <div key={index} className="border border-red-500 rounded-xl p-20 text-center h-72 bg-white shadow-md flex flex-col items-center">
          <div className="text-5xl mb-4 text-red-500">{box.img}</div>
          <div className="text-2xl font-medium font-sans ">{box.skills}</div>
        </div>
      ))}
      
    </div>

    </>
  )
}

export default Benefits;
