import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const headings = [
  "01/ UXUI  Product Design",
  "02/ Application Development",
  "03/ Web Development",
  "04/ Web3 Development",
  "05/ Maintenance & Support"
];

const tags = [
  "SCOPING SESSION",
  "UI REVIEW",
  "UI DESIGN",
  "BRANDING",
  "PRODUCT DESIGN",
  "RAPID PROTOTYPING"
];

function Product() {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="main max-auto md:flex justify-between mt-16 md:text-left text-center  block ">
        <div className="product-design md:w-[40%]">
          {headings.map((heading, index) => (
            <div key={index}>
              <h1 className='font-bold text-4xl mb-20 hover:text-orange-600 border-b pb-4 w-[90%]'>
                <span className='text-gray-400 '>{heading.split('/')[0]}/</span> {heading.split('/')[1]}
               
              </h1>
            </div>
          ))}
        </div>
        <div className="scoping border md:w-[60%] border-orange-600 rounded-2xl ">
          <div className="tags flex flex-wrap">
            {tags.map((tag, index) => (
              <p key={index} className='border p-2 mt-8 ml-8 rounded-full border-gray-500 hover:border-orange-600 font-normal'>
                {tag}
              </p>
            ))}
          </div>
          <p className='mt-12 w-[60%] ml-8  '>
            We specialize in creating captivating user experiences and intuitive interfaces that resonate with
            your audience, ensuring your digital products stand out in today’s competitive landscape.
          </p>
          <div className="learnmore flex ml-12 ">
            <h1 className='mt-14  font-bold text-2xl'>LEARN MORE</h1>
            <button>
              <FontAwesomeIcon className='rotate-45 ml-16 mt-10 border-orange-500 border p-5 text-xl rounded-full hover:bg-orange-600 hover:text-white' icon={faArrowUp} />
            </button>
          </div>
          
          <div className="img  w-full relative mt-40 bg-orange-600 md:h-96 xl:h-96 h-60 border-b rounded-b-2xl">
  <img className='  w-1/2 mx-auto absolute left-1/2 bottom-5 transform -translate-x-1/2 '  src="https://alltechvirtual.io/wp-content/uploads/2024/02/Preview-porto-01.png" alt="Preview" />
</div>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
