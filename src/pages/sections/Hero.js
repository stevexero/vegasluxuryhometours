import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeroImg from '../../assets/hero_img.jpeg';
import Logo from '../../assets/vlht_logo.png';
import RightArrow from '../../assets/right_arrow.svg';

import './Hero.css';

const Hero = () => {
  const [logoWidth, setLogoWidth] = useState(414);
  const [logoVisibility, setLogoVisibility] = useState('visible');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 200) {
      let minWidth = 130,
        logoWidth = Math.max(minWidth, 414 - scrollTop);
      setLogoWidth(logoWidth);
    } else {
      setLogoWidth(logoWidth);
    }
    if (scrollTop > 298) {
      setLogoVisibility('hidden');
    } else {
      setLogoVisibility('visible');
    }
  };

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
          <p className='rajdhani-bold-18 text-white'>
            Venture outside of the{' '}
            <span className='allura-regular-36 text-medium-gold'>
              glittering lights{' '}
            </span>{' '}
            of the Vegas Strip and tour{' '}
            <span className='rajdhani-bold-24 text-medium-gold'>
              gorgeous homes
            </span>{' '}
            with scenic views along the way.
          </p>
          <br />
          <p className='rajdhani-bold-18 text-white'>
            You will love the{' '}
            <span className='rajdhani-bold-24 text-medium-gold'>VIP</span>{' '}
            treatment as you get a taste of the local Vegas{' '}
            <span className='rajdhani-bold-24 text-medium-gold'>
              luxury lifestyle!
            </span>
          </p>
          <Link to='/book' className='btn-hero alfa-slab-one-18'>
            BOOK NOW
            <img src={RightArrow} alt='>' className='btn-arrow' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
