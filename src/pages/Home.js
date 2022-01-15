import { motion } from 'framer-motion';

import Hero from './sections/Hero';
import SubHero from './sections/SubHero';
import Reviews from './sections/Reviews';
import Story from './sections/Story';
import BottomHero from './sections/BottomHero';

import './Home.css';

const Home = () => {
  return (
    <motion.div
      className='Home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}>
      <Hero />
      <SubHero />
      <Reviews />
      <Story />
      <BottomHero />
    </motion.div>
  );
};

export default Home;
