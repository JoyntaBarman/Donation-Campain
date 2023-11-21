
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {

  const Navigate = useNavigate();

  const {id} = donation;
  const { img } = donation;
  const { category } = donation;
  const { title } = donation;
  const { card_bg } = donation;
  const { category_bg } = donation;
  const { text_bg } = donation;

  function handleCardClick (id) {
    Navigate(`/donationDetails/${id}`);
  }

  return (
    <div onClick={()=> {handleCardClick(id)}}
      className="card card-compact shadow-xl"
      style={{ background: card_bg }}
    >
      <figure>
        <img className="w-full h-[200px] object-cover" src={img} />
      </figure>
      <div className="card-body">

        <div className="card-actions">
        <button
          className={`card-title px-2 py-1 rounded-lg text-sm`}
          style={{ color: text_bg, background: category_bg }}
        >
          {category}
        </button>
        </div>
        <p className="text-xl font-semibold" style={{ color: text_bg }}>
          {title}
        </p>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;

// style ={{color: text_bg}}
