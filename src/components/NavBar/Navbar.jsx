import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="mx-4 sm:mx-10 lg:mx-20">
      <div className="navbar ">
        <div className="flex-1">
          {/* <a className="btn btn-ghost text-xl"> */}
          <img
            className="w-36 sm:w-52"
            src="/src/assets/Logo.png"
            alt="Donation"
          />
          {/* </a> */}
        </div>
        <div className="flex-none">
          <ul className="flex sm:gap-4">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/donation'}>Donation</NavLink>
            </li>
            <li>
              <NavLink to={'/statistics'}>Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
