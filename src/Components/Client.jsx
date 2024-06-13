import React from "react";

function Client() {

  return (
    <div>
      <div className="main grid lg:grid-cols-3 md:grid-cols-1  grid-rows-2 sm:grid-cols-1 mt-20 gap-10 m-14 ">
        <div className="experince  ">
          <h1 className="text-7xl font-bold font-sans leading-tight tracking-wide ">Client Experiences with Us</h1>
          <p className=" font-midum text-2xl font-sans text-neutral-500 mt-8  text-left leading-normal ">
            Celebrate our exceptional service through the lens of our clients'
            experiences. Explore insightful testimonials highlighting the
            unparalleled journey our clients undergo with us. Discover why our
            personalized approach sets us apart. Experience excellence
            firsthand. Explore now! </p>
        </div>
        <div className="alexnder bg-neutral-200 rounded-xl">
          <img className="max-w-28  m-6 rounded-full" src="https://alltechvirtual.io/wp-content/uploads/2024/05/alexander-stone.jpeg" alt="" />
          <h2 className=" ml-6 text-xl font-sans font-bold">Alexander Stone</h2>
          <p className="ml-10 text-gray-700 font-sans">ChainRaise</p>
          <p className="m-5 font-sans text-2xl w-auto mt-2 leading-normal text-left">
            "We had the pleasure of working with Alltech Virtual on a custom
            application development project, and we couldn't be more impressed
            with their expertise, professionalism, and dedication to delivering
            outstanding results."
          </p>
        </div>

        <div className="lima  bg-neutral-200 rounded-xl">
          <img className="max-w-28  m-6 rounded-full" src="https://alltechvirtual.io/wp-content/uploads/2024/05/liam-roberts-150x150.jpeg" alt="" />
          <h2 className=" ml-6 text-xl font-sans font-bold">Liam Roberts</h2>
          <p  className="ml-10 text-gray-700 font-sans">WeathR</p>
          <p className="m-5 font-sans text-2xl w-auto mt-2 leading-normal text-left">
            "The application prototype they built exceeded our expectations and
            has greatly improved the UXUI for our users. We highly recommend
            Alltech Virtual for any organization in need of reliable and
            customized software development services."{" "}
          </p>
        </div>

<div className="empty-div">
</div>
        <div className="lima  bg-neutral-200 rounded-xl">
          <img className="max-w-28  m-6 rounded-full" src="https://alltechvirtual.io/wp-content/uploads/2024/05/Sophia-Anderson-150x150.jpeg" alt="" />
          <h2 className=" ml-6 text-xl font-sans font-bold">Sophia Anderson</h2>
          <p  className="ml-8 text-gray-700 font-sans">CareWell Systems</p>
          <p className="m-5 font-sans text-2xl w-auto mt-2 leading-normal text-left">
          "Thanks to Alltech Virtual's expertise and the custom web portal they developed for us, our business has experienced a significant boost in efficiency and productivity. The solution has streamlined our processes."
          </p>
        </div>

        <div className="lima  bg-neutral-200 rounded-xl">
          <img className="max-w-28  m-6 rounded-full" src="https://alltechvirtual.io/wp-content/uploads/2024/05/Noah-Brown-150x150.jpg" alt="" />
          <h2 className=" ml-6 text-xl font-sans font-bold">Noah Brown</h2>
          <p  className="ml-4 text-gray-700 font-sans">DigitalSolutions Inc.</p>
          <p className="m-5 font-sans text-2xl w-auto mt-2 leading-normal text-left">
          "Working with Alltech Virtual for our mobile application needs was an exceptional experience. Their team showcased unmatched expertise, professionalism, and a strong dedication to delivering a high-quality solution tailored to our requirements."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Client;
