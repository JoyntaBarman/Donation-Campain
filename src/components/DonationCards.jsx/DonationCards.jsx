import React, { useEffect, useRef, useState } from 'react';
import DonationCard from './DonationCard';
import { useLoaderData } from 'react-router-dom';
import Empty from '../Empty/Empty';

const DonationCards = () => {
  // const donations = useLoaderData();
  // console.log(donations);

  const [donations, setDonation] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const inputRef = useRef();



  function handleSearch (category) {

    const filteredData = donations.filter((obj) => {
      return obj.category.toLowerCase() === category.toLowerCase();
    });

    setDisplayData(filteredData);
    inputRef.current.value = '';
  }


  useEffect(() => {
    fetch('/data/donation.json')
      .then((response) => response.json())
      .then((data) => {
        setDonation(data);
        setDisplayData(data)
      });



  }, []);

  return (
    <div>
      <div className="relative bg-[url('/src/assets/Clothing.png')] bg-cover bg-no-repeat font-Inter ">
      <div className='bg-[#fffffff2] py-44 flex justify-center'>
        <div>
        <h3 className="text-5xl text-text-color font-bold opacity-100 text-center px-4">
          I Grow By Helping People In Need
        </h3>
        <div className="sm:flex sm:justify-center mt-10 text-center">
          <input ref={inputRef}
            className="p-3 text-[#0b0b0b66]  rounded-l-lg outline-none w-1/2 lg:w-1/3"
            type="text"
            placeholder="Search here...."
          />
          <button onClick={() => handleSearch(inputRef.current.value)}
            className="py-3 px-4 bg-[#FF444A] text-white  rounded-r-lg font-semibold"
          >
            Search
          </button>
        </div>
        </div>
      </div>
    </div>

    <div className="mt-24 mx-4 sm:mx-10 lg:mx-20 grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {
        displayData.length !== 0 ? displayData.map((value, idx) => {
          return <DonationCard key={idx} donation={value}></DonationCard>;
        }) : <Empty></Empty>
      }
    </div>
    </div>
  );
};

export default DonationCards;
