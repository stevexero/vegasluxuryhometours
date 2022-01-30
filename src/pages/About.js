import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import AboutPhoto from '../assets/erica_1.png';

import './About.css';

const About = () => {
  return (
    <motion.div
      className='About'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}>
      <div className='About-container'>
        <p className='montserrat-regular-14 text-dark-silver'>
          <span className='allura-regular-36'>Erica </span> is a licensed home
          specialist and knows where to find luxury listings in Las Vegas that
          will bedazzle you just like the glittering lights of the strip! She
          has lived in Vegas for the past 20 years and would love to share her
          enthusiasm and appreciation for the beautiful and unique homes that
          stud the valley outside the crowded tourist spots of Las Vegas.
          <br />
          <br />
          <Link
            to='/contact'
            className='page-link cinzel-decorative-bold-18 text-dark-gold mt-32'>
            Contact Erica
          </Link>
        </p>
        <img src={AboutPhoto} alt='Erica Profile' className='About-photo' />
      </div>
    </motion.div>
  );
};

export default About;
