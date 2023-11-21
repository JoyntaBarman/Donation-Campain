import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {

  const Navigate = useNavigate();

  const { img } = donation;
  const { id } = donation;
  const { category } = donation;
  const { title } = donation;
  const { price } = donation;
  const { text_bg } = donation;
  const { card_bg } = donation;
  const { category_bg } = donation;


  function handleViewDetails (id) {
    Navigate(`/donationDetails/${id}`);
  }

  return (
    <div className="hero rounded" style={{ background: card_bg }}>
      <div className="hero-content p-0 gap-0 grid grid-cols-3">
        <img src={img} className=" h-full object-cover shadow-2xl rounded-l" />
        <div className="col-span-2 p-6">
          <button
            className=" text-sm px-2 py-1 rounded"
            style={{ color: text_bg, background: category_bg }}
          >
            {category}
          </button>
          <h3 className='mt-2 text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 font-semibold' style={{ color: text_bg }}>${price}</p>
          <button onClick={ () => handleViewDetails(id)}
            className="text-lg font-semibold px-4 py-2 rounded mt-5"
            style={{ background: text_bg, color: 'white' }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
