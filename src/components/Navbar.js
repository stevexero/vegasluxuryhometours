import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useMobileMenu, useMobileMenuUpdate } from '../MobileMenuContext';

import Logo from '../assets/vlht_logo.png';

import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const menuOpen = useMobileMenu();
  const toggleMenu = useMobileMenuUpdate();

  const [logoVisibility, setLogoVisibility] = useState('hidden');
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = (e) => {
    if (isMobile) {
      // Do Nothing
    } else {
      let scrollTop = window.scrollY;

      if (scrollTop > 298) {
        setLogoVisibility('visible');
        setNavBackgroundColor('black');
      } else {
        setLogoVisibility('hidden');
        setNavBackgroundColor('transparent');
      }
    }
  };

  return (
    <nav
      className='Navbar'
      style={{
        background: location.pathname === '/' ? navBackgroundColor : 'black',
        transition: '0.3s',
      }}>
      {isMobile ? (
        <div onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} size='2x' className='Navbar-x' />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size='2x'
              className='Navbar-hamburger'
            />
          )}
        </div>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
