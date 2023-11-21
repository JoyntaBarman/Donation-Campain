import App from '../../App';
import Home from '../Home/Home';
import Error from '../ErrorPage/Error';
import DonationDetails from '../DonationDetails/DonationDetails';
import Donation from '../Donation/Donation';
import Statistics from '../Statistics/Statistics';

const routes = [
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: async () => {
         return fetch('/data/donation.json');
        },
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: async () => {
          return fetch('/data/donation.json');
         },
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ],
  },
];

export { routes };
