import React from "react";

const technologies = [
  {
    name: "MYSQL",
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/mysql-Photoroom.png-Photoroom-150x150.png",
  },
  {
    name: "MONGODB",
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/mongo-db-Photoroom.png-Photoroom-150x150.png",
  },
  {
    name: "POSTGRESQL",
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/postgresql-Photoroom.png-Photoroom-150x150.png",
  },
  {
    name: "DYNAMODB",
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/dynamodb-Photoroom.png-Photoroom-150x150.png",
  },
  {
    name: "FIREBASE",
    imgSrc: "https://alltechvirtual.io/wp-content/uploads/2024/02/firebase_r-150x150.png",
  },
];


const frontend=[
  {name:"REACT . JS",
    imgSrc:"https://alltechvirtual.io/wp-content/uploads/2024/02/icon-programing-04-150x150.png"
  },
  {name:"ANGULAR JS",
    imgSrc:"https://alltechvirtual.io/wp-content/uploads/2024/02/angularjs-1-150x150.png"
  },

{name:" VUE JS",
    imgSrc:"https://alltechvirtual.io/wp-content/uploads/2024/02/vue_js-150x150.png"
  },

{name:"TYPESCRIPT",
    imgSrc:"https://alltechvirtual.io/wp-content/uploads/2024/02/icon-programing-012-150x150.png"
  }

]

function Technology() {
  return (
    <div>
      <h1 className="  md:border-b-4  mx-auto md:ml-24 text-4xl md:text-5xl text-center item-center lg:text-left pb-5 font-bold">
        TECHNOLOGY STACK
      </h1>
      <div className="main flex flex-col lg:flex-row max-w-[93%] mx-auto text-center item-center lg:text-left ">
        <div className="sidebar md:border-r-4 pr-12 md:text-4xl text-2xl font-medium w-full lg:w-[40%] ">
          {["Web Platform", "Cloud & DevOps", "Database", "Mobile Apps"].map((item, index) => (
            <h1 key={index} className=" mx-auto md:mt-20 mt-10 xl:border-l-4 pl-3 hover:border-orange-600 hover:text-orange-600">
              <span className="text-gray-500">{`0${index + 1}/`}</span> {item}
            </h1>
          ))}
        </div>


        <div className="second w-full lg:w-auto">
        <h1 className=" font-bold lg:text-5xl mt-10 md:ml-12 text-4xl sm:text-center item-center lg:text-left  ">Front-End</h1>
        <div className="sql flex flex-wrap  mt-5 ml-12 w-full items-center" >
            {frontend.map((tech, index) => (
              <div key={index} className="box-1 flex bg-black rounded-2xl text-white mt-10 mr-3  ">
                <img
                  className="w-[25%] lg:w-[33%] bg-black p-4 rounded-2xl"
                  src={tech.imgSrc}
                  alt={tech.name}
                />
                <p className=" my-auto  mx-auto lg:text-xl ">{tech.name}</p>
              </div>

              
              
            ))}
          </div>

          <h1 className=" font-bold lg:text-5xl mt-10 md:ml-12 text-4xl sm:text-center item-center lg:text-left  ">Back-End</h1>
          <div className="sql flex flex-wrap  mt-5 ml-12 w-full">
            {technologies.map((tech, index) => (
              <div key={index} className="box-1 flex bg-black rounded-2xl text-white mt-10 mr-3  ">
                <img
                  className="w-[25%] lg:w-[33%] bg-black p-4 rounded-2xl"
                  src={tech.imgSrc}
                  alt={tech.name}
                />
                <p className=" mx-auto my-auto  lg:text-xl">{tech.name}</p>
              </div>

              
              
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Technology;
