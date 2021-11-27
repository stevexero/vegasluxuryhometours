import Hero from './sections/Hero';
import SubHero from './sections/SubHero';
import Reviews from './sections/Reviews';
import Story from './sections/Story';
import BottomHero from './sections/BottomHero';

import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <SubHero />
      <Reviews />
      <Story />
      <BottomHero />
    </div>
  );
};

export default Home;
