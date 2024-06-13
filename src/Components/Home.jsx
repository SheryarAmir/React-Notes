import React from "react";

function Home() {
  return (
    <div>

      <section className="grid md:grid-cols-2">
      <div className="img gap-8 ">
        <img
          src="https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?t=st=1716364347~exp=1716367947~hmac=46e9fa8fe4ae307cf4ace6248c9c5dfbe6a474bc149deb08764a8e165cae6e3b&w=1060"
          alt=""
          className="w-full p-4 rounded-[40px] "
        />
      </div>
      <div className="para p-4 sm:max-lg:bg-blue-600">
        <h1 className="text-4xl font-medium text-center items-center mb-6 ">
          Hedding
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolore
          libero sapiente ratione facilis consequuntur in assumenda laudantium
          veritatis beatae accusantium id illo natus numquam, dolorem excepturi
          mini
        </p>
      </div>
      </section>
    </div>
   
  );
}

export default Home;
