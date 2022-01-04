import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import HeroImg from '../../assets/hero_img.jpeg';
import Logo from '../../assets/vlht_logo.png';
import RightArrow from '../../assets/right_arrow.svg';

import './Hero.css';

const Hero = () => {
  const isMobileSmall = useMediaQuery({ query: '(max-width: 320px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [logoWidth, setLogoWidth] = useState(
    isMobileSmall ? 200 : isMobile ? 278 : 414
  );
  const [logoVisibility, setLogoVisibility] = useState('visible');

  const handleScroll = () => {
    if (isMobileSmall) {
      setLogoWidth(200);
    } else if (isMobile) {
      setLogoWidth(278);
    } else {
      let scrollTop = window.scrollY;
      if (scrollTop > 260) {
        let minWidth = 130,
          logoWidth = minWidth;
        setLogoWidth(logoWidth);
      } else {
        setLogoWidth(logoWidth);
      }
      if (scrollTop > 298) {
        setLogoVisibility('hidden');
      } else {
        setLogoVisibility('visible');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header
      className='Hero'
      style={{ background: `url(${HeroImg}) no-repeat center center/cover` }}>
      <div className='overlay'>
        <div className='Hero-logo-container'>
          <img
            className='Hero-logo'
            src={Logo}
            alt='logo'
            style={{
              width: `${logoWidth}px`,
              visibility: logoVisibility,
              transition: logoVisibility === 'hidden' ? '0s' : '0.2s',
            }}
          />
        </div>
        <div className='Hero-text'>
          <p
            className={`${
              isMobileSmall ? 'rajdhani-bold-12 small' : 'rajdhani-bold-18'
            } text-white`}>
            Venture outside of the {isMobile && <br />}
            <span
              className={`${
                isMobileSmall
                  ? 'allura-regular-28 small cursive-text'
                  : 'allura-regular-36'
              } text-medium-gold`}>
              glittering lights{' '}
            </span>{' '}
            {isMobile && <br />}
            of the Vegas Strip and tour {isMobile && <br />}
            <span
              className={`${
                isMobileSmall ? 'rajdhani-bold-18 small' : 'rajdhani-bold-24'
              } text-medium-gold`}>
              gorgeous homes
            </span>{' '}
            {isMobile && <br />}
            with scenic views along the way.
          </p>
          <br />
          <p
            className={`${
              isMobileSmall ? 'rajdhani-bold-12 small' : 'rajdhani-bold-18'
            } text-white`}>
            You will love the{' '}
            <span
              className={`${
                isMobileSmall ? 'rajdhani-bold-18 small' : 'rajdhani-bold-24'
              } text-medium-gold`}>
              VIP
            </span>{' '}
            treatment {isMobile && <br />} as you get a taste of the local Vegas{' '}
            {isMobile && <br />}
            <span
              className={`${
                isMobileSmall ? 'rajdhani-bold-18 small' : 'rajdhani-bold-24'
              } text-medium-gold`}>
              luxury lifestyle!
            </span>
          </p>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
                type: 'spring',
              },
            }}
            style={{ marginTop: '3rem' }}>
            <Link
              to='/book'
              className={`btn-hero ${
                isMobileSmall ? 'alfa-slab-one-10' : 'alfa-slab-one-18'
              }`}>
              BOOK NOW
              <img src={RightArrow} alt='>' className='btn-arrow' />
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
