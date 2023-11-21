import { useLoaderData, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { saveDonationData } from '../../js/localStorage';

const DonationDetails = () => {
  const params = useParams();
  const { id } = params;
  const data = useLoaderData();

  const donation = data.find((obj) => obj.id === parseInt(id));

  const { img } = donation;
  const { description } = donation;
  const { title } = donation;
  const { price } = donation;
  const { text_bg } = donation;

  const style = {
    duration: 2000,
    position: 'top-right',
    style: {
      background: text_bg,
      color: 'white',
    },
  };

  const notify = () => {
    saveDonationData(parseInt(id));
    console.log(id);
    return toast('Donation successfull.', style);
  };

  return (
    <div className="py-20 mx-4 sm:mx-10 lg:mx-20">
      <div className="relative">
        <img className="rounded-lg w-full object-fill" src={img} alt="" />

        <div className="bg-[#0b0b0b80] w-full absolute bottom-0 rounded-b p-9">
          <button
            onClick={notify}
            className={`px-5 py-3 text-white font-semibold rounded`}
            style={{ background: text_bg }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h3 className="mt-20 text-text-color text-4xl font-bold">{title}</h3>
      <p className="mt-6 text-text-description leading-8">{description}</p>
      <Toaster />
    </div>
  );
};

export default DonationDetails;
