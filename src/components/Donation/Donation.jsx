import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../js/localStorage';
import DonationCard from './DonatedCard';
import { useEffect, useState } from 'react';

const Donation = () => {
  const data = useLoaderData();
  const [displayDonatedData, setDisplayDonatedData] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const storedData = getStoredDonation();

  const donatedData = data.filter((obj) => {
    return storedData.find((value) => value === obj.id);
  });

  function handleShowButton() {
    setDisplayDonatedData(donatedData);
    setShowButton(false);
  }

  // displayData();
  console.log(donatedData.slice(0, 4));
  useEffect(() => {
    if (donatedData.length >= 5) {
      setDisplayDonatedData(donatedData.slice(0, 4));
      setShowButton(true);
    } else {
      setDisplayDonatedData(donatedData);
    }
  }, []);

  console.log(displayDonatedData.length);

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-4 sm:mx-10 lg:mx-20 mt-20">
        {
        displayDonatedData.map((obj) => (
          <DonationCard key={obj.id} donation={obj}></DonationCard>
        ))
        }
        {
          displayDonatedData.length === 0 ? <div>No donation!!</div>: ''
        }
      </div>

      <div onClick={handleShowButton} className="text-center mt-10">
        <button
          className={`px-6 py-3 bg-[#009444] rounded text-white font-semibold ${
            showButton ? '' : 'hidden'
          }`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
