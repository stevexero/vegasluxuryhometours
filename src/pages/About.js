import AboutPhoto from '../assets/erica_1.jpeg';

import './About.css';

const About = () => {
  return (
    <div className='About'>
      <div className='About-container'>
        <p className='montserrat-regular-14 text-dark-silver'>
          <span className='allura-regular-36'>Erica </span> is a licensed home
          specialist and knows where to find luxury listings in Las Vegas that
          will bedazzle you just like the glittering lights of the strip! She
          has lived in Vegas for the past 20 years and would love to share her
          enthusiasm and appreciation for the beautiful and unique homes that
          stud the valley outside the crowded tourist spots of Las Vegas.
        </p>
        <img
          src={AboutPhoto}
          alt='Erica Profile Photo'
          className='About-photo'
        />
      </div>
    </div>
  );
};

export default About;
