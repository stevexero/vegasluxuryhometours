import './Hero.css';

import HeroImg from '../../assets/hero_img.jpeg';
import Logo from '../../assets/vlht_logo.png';

const Hero = () => {
  return (
    <header
      className='Hero'
      style={{ background: `url(${HeroImg}) no-repeat center center/cover` }}>
      <div className='overlay'>
        <img className='Hero-logo' src={Logo} alt='logo' />
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
