import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useMobileMenu, useMobileMenuUpdate } from '../MobileMenuContext';

import IgLogo from '../assets/ig.png';

import './MobileMenu.css';

const MobileMenu = () => {
  const menuOpen = useMobileMenu();
  const toggleMenu = useMobileMenuUpdate();

  return (
    <>
      {menuOpen ? (
        <motion.div
          className='MobileMenu'
          initial={{ x: '-110vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{
            x: '-110vw',
            transition: { duration: 0.5 },
          }}
        >
          <div className='MobileMenu-container'>
            <Link
              to='/'
              className='cinzel-regular-24 text-dark-silver'
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to='/about'
              className='cinzel-regular-24 text-dark-silver'
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to='/contact'
              className='cinzel-regular-24 text-dark-silver'
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {/* <Link
              to='/blog'
              className='cinzel-regular-24 text-dark-silver'
              onClick={toggleMenu}
            >
              Blog
            </Link> */}
            <Link
              to='/book'
              className='cinzel-regular-24 text-dark-silver'
              onClick={toggleMenu}
            >
              Book Now
            </Link>
            <a
              href='https://www.instagram.com/lasvegasluxuryhometours/'
              target='_blank'
              rel='noreferrer'
              onClick={toggleMenu}
            >
              <img src={IgLogo} alt='instagram' width='29px' />
            </a>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default MobileMenu;
