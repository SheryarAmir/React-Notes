import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function Grid() {

  const data = [
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/Frame-18-1024x601.webp",
    tags: ["web development", "mobile app"],
    title: "TRAVAL BOOKING PLATFORM",
    project: "Omio | Web & Mobile App",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/Frame-24cxcxc-1-1-1024x601.webp",
    tags: ["web development", "mobile app"],
    title: "TEHEHEALTH",
    project: "Omio | Web & Mobile App",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/k-1.png",
    tags: ["web development"],
    title: "REAL ESTATE",
    project: "eXprealty | Web Application",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/Screenshot-2024-02-19-at-11.22.18-PM-1024x456.webp",
    tags: ["MOBILE APP", "UI DESIGN"],
    title: "ENVIRONMENTAL TECHONOLOGY",
    project: "Weather Mobile App design",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/Screenshot-2024-02-19-at-11.41.05-PM-1024x585.webp",
    tags: ["WEB DEVELOPMENT"],
    title: "CROWDFUNDING",
    project: "ChainRaise | Web Application",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/Screenshot-2024-02-19-at-11.32.25-PM-1024x694.webp",
    tags: ["UI DESIGN"],
    title: "FINTECH",
    project: "Web Dashboard Design",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/Image-14-1024x601.webp",
    tags: ["MOBILE APP", "UI DESIGN"],
    title: "HEALTHCARE",
    project: "Bedoctor Appointment Mobile App",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/k.png",
    tags: ["MOBILE APP", "UI DESIGN"],
    title: "ECOMMERCE",
    project: "Boot. | Ecommerce Web App",
  },
  {
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-2.05.14-AM.jpeg",
    tags: ["MOBILE APP", "UI DESIGN"],
    title: "WEB3 BLOCKCHAIN",
    project: "Meta Movers | Virtual Real Estate Marketplace",
  },
  
];  
  return (
    <div >
      <div className="project mt-32 md:flex block justify-between border-t-2 pt-12   text-center items-center  md:w-11/12 ">
        <div className="text text-7xl font-bold md:w-2/6 ">OUR PROJECTS</div>
        <button className=" border rounded-full text-white bg-orange-600 pl-6 pr-6 p-3 mt-6  ">
          ALL CASE{" "}
          <FontAwesomeIcon
            className="rotate-45  hover:text-white ml-3"
            icon={faArrowUp}
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-4 md:m-8 lg:m-12  ">
      {data.map((item, index) => (
        <div key={index} className="relative hover:animate-bounceUp mb-40 ">
          <img className="block w-full h-80 rounded-2xl " src={item.imgSrc} alt="" />
          <div className="absolute bottom-2 p-4 text-white flex space-x-2">
            {item.tags.map((tag, idx) => (
              <h2 key={idx} className="bg-orange-600 text-white rounded-full lg:font-medium p-3 pl-5 pr-5">
                {tag}
              </h2>
            ))}
          </div>
          <div className="absolute  left-0 p-4  text-black">
            <p className="ml-8 mt-5 font-medium text-xl">
              {item.title}
            </p>
            <div className="flex mt-4  ml-8 font-bold xl:text-2xl lg:text-lg hover:text-orange-600 w-full ">
              <h1>{item.project}</h1>
              <button className=" -mt-12 ml-40">
                <FontAwesomeIcon
                  className="rotate-45"
                  icon={faArrowUp}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
     
    </div>
  );
}

export default Grid;
