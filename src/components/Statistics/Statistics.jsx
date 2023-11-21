import { PieChart } from 'react-minimal-pie-chart';
import { getStoredDonation } from '../../js/localStorage';

const Statistics = () => {
  const yourDonation = getStoredDonation().length;
  const totalDonation = 12 - yourDonation;

  return (
    <div className="flex justify-center">
      <div className=" mt-24 text-black">
        <PieChart
          data={[
            {
              title: 'Your Donation',
              value: yourDonation,
              color: '#00C49F',
              lineWidth: 75,
            },
            {
              title: 'Total Donation',
              value: totalDonation,
              color: '#FF444A',
              lineWidth: 75,
            },
          ]}
          animate={true}
          label={(labelRenderProps) =>
            `${labelRenderProps.dataEntry.percentage.toFixed(2)} %`
          }
          labelStyle={{ color: 'white', fontSize: '8px' }}

        />

        <div className="flex gap-6 sm:justify-center items-center flex-col sm:flex-row jus mt-10">
          <div className="flex gap-3 items-center rounded">
            Your donation: <div className="w-[50px] h-[10px] bg-[#00C49F]"></div>
          </div>

          <div className="flex gap-3 items-center rounded">
            Total donation:{' '}
            <div className="w-[50px] h-[10px] bg-[#FF444A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
