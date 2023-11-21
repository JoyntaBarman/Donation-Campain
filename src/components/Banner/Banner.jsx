import React from 'react';
import { labelContext } from '../../js/LabelContext';
import { useContext } from 'react';

const Banner = () => {

  const searchFunc = useContext(labelContext);

  console.log(searchFunc);

  return (
    <div className="relative bg-[url('/src/assets/Clothing.png')] bg-cover bg-no-repeat font-Inter ">
      <div className='bg-[#fffffff2] py-44 flex justify-center'>
        <div>
        <h3 className="text-5xl text-text-color font-bold opacity-100 text-center px-4">
          I Grow By Helping People In Need
        </h3>
        <div className="sm:flex sm:justify-center mt-10 text-center">
          <input
            className="p-3 text-[#0b0b0b66]  rounded-l-lg outline-none w-1/2 lg:w-1/3"
            type="text"
            placeholder="Search here...."
          />
          <button
            className="py-3 px-4 bg-[#FF444A] text-white  rounded-r-lg font-semibold"
          >
            Search
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
