import './Hero.css';

import HeroImg from '../../assets/hero_img.jpeg';

const Hero = () => {
  return (
    <header
      className='Hero'
      style={{ background: `url(${HeroImg}) no-repeat center center/cover` }}>
      <div className='overlay'>
        <h1>Hero Section</h1>
      </div>
    </header>
  );
};

export default Hero;
