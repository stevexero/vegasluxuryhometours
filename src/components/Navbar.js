import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/vlht_logo.png';

import './Navbar.css';

const Navbar = () => {
  const [logoVisibility, setLogoVisibility] = useState('hidden');
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    let scrollTop = window.scrollY;

    if (scrollTop > 350) {
      setLogoVisibility('visible');
      setNavBackgroundColor('black');
    } else {
      setLogoVisibility('hidden');
      setNavBackgroundColor('transparent');
    }
  };
  return (
    <nav
      className='Navbar'
      style={{ background: navBackgroundColor, transition: '0.3s' }}>
      <div className='Navbar-container'>
        <div className='Navbar-left'>
          <Link className='rajdhani-bold-24 nav-link' to='/'>
            Home
          </Link>
          <Link className='rajdhani-bold-24 nav-link' to='/about'>
            About
          </Link>
        </div>
        <img
          className='Hero-logo'
          src={Logo}
          alt='logo'
          style={{
            width: '130px',
            visibility: logoVisibility,
            transition: logoVisibility === 'hidden' ? '0.01s' : '0s',
          }}
        />
        <div className='Navbar-right'>
          <Link className='rajdhani-bold-24 nav-link' to='/contact'>
            Contact
          </Link>
          <Link className='rajdhani-bold-24 nav-link' to='/book'>
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
