import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trust() {
  const sliderData = [
    { id: 1, image: "https://alltechvirtual.io/wp-content/uploads/2024/05/solana.png" },
    { id: 2, image: "https://alltechvirtual.io/wp-content/uploads/2024/05/poooooo-2.png" },
    { id: 3, image: "https://alltechvirtual.io/wp-content/uploads/2024/05/court-reserve.png" },
    { id: 4, image: "https://alltechvirtual.io/wp-content/uploads/2024/05/chainraise.png" },
    { id: 5, image: "https://alltechvirtual.io/wp-content/uploads/2024/05/consortia-1.png" },
  ];

  const mainSliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-[90%] '>
    
        <h1 className='text-center items-center font-bold text-5xl mt-12 mb-4  '> <span className=' text-5xl font-normal '>Trusted</span> By</h1>
        <hr  className='max-w-auto text-center items-center xl:ml-32 ml-6'/>
        <p className='text-center items-center font-bold text-5xl text-orange-600 mb-12 '> . . . ___<span></span></p>
       
      <Slider {...sliderSettings} ref={mainSliderRef}>
        {sliderData.map((slide) => (
          <div className='overflow-hidden' key={slide.id}>
            <img className='max-w-auto ' src={slide.image} alt={`Slide ${slide.id}`} style={{width:"80%"}}  />
          </div>
        ))}
      </Slider>
     
    </div>
  );
}

export default Trust;



<img decoding="async" class="swiper-slide-image lazyloaded" data-src="https://alltechvirtual.io/wp-content/uploads/2024/05/solana.png" alt="Solana" src="" style="--smush-placeholder-width: 504px; --smush-placeholder-aspect-ratio: 504/189;"></img>