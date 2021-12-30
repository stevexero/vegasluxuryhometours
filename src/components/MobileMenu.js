import { Link } from 'react-router-dom';

import IgLogo from '../assets/ig.png';

import './MobileMenu.css';

const MobileMenu = () => {
  return (
    <div className='MobileMenu'>
      <div className='MobileMenu-container'>
        <Link to='/' className='cinzel-regular-24 text-dark-silver'>
          Home
        </Link>
        <Link to='/about' className='cinzel-regular-24 text-dark-silver'>
          About
        </Link>
        <Link to='/contact' className='cinzel-regular-24 text-dark-silver'>
          Contact
        </Link>
        <Link to='/book' className='cinzel-regular-24 text-dark-silver'>
          Book Now
        </Link>
        <a
          href='https://www.instagram.com/lasvegasluxuryhometours/'
          target='_blank'
          rel='noreferrer'>
          <img src={IgLogo} alt='instagram' width='29px' />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
