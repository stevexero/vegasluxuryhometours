import { useEffect, useState } from 'react';

import HeroImg from '../../assets/hero_img.jpeg';
import Logo from '../../assets/vlht_logo.png';

import './Hero.css';

const Hero = () => {
  const [logoWidth, setLogoWidth] = useState(414);
  const [logoVisibility, setLogoVisibility] = useState('visible');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 275) {
      let minWidth = 130,
        logoWidth = Math.max(minWidth, 414 - scrollTop);
      setLogoWidth(logoWidth);
    } else {
      setLogoWidth(logoWidth);
    }
    if (scrollTop > 400) {
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
        <p className='rajdhani-bold-18 text-white'>
          Venture outside of the{' '}
          <span className='allura-regular-36'>glittering lights</span> of the
          Vegas Strip and tour
          <span>gorgeous homes</span> with scenic views along the way.
        </p>
        <p className='rajdhani-bold-18 text-white'>
          You will love the <span>VIP</span> treatment as you get a taste of the
          local Vegas
          <span>luxury lifestyle!</span>
        </p>
      </div>
    </header>
  );
};

export default Hero;
