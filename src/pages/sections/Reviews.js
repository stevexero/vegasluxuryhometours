import { Parallax, Background } from 'react-parallax';

import ReviewsBackground from '../../assets/reviews_bg.jpeg';
import Aaron from '../../assets/aaron.jpeg';

import './Reviews.css';

const Reviews = () => {
  const insideStyles = {
    width: '1100px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div className='Reviews'>
      <Parallax bgImage={ReviewsBackground} strength={500}>
        <div style={{ height: 600, background: 'rgba(0,0,0,0.75)' }}>
          <div style={insideStyles}>
            <h1
              className='cinzel-regular-56 text-light-gold'
              style={{ width: '1000px' }}>
              “Every member of our group greatly enjoyed this tour.”
            </h1>
            <p className='montserrat-light-14 text-white mt-32'>
              Erica was great to work with, very accommodating and super
              pleasant. She led the tour so capably and smoothly. The luxury
              homes were beautiful and very fun to tour. We highly recommend
              this tour for anyone interested in architecture, home design and
              decor or just looking for a fun and unique way to see some lovely
              homes in Las Vegas. Well worth the time and money! Thanks Erica!!
            </p>
            <img
              src={Aaron}
              className='Reviews-profile-image mt-32'
              alt='Aaron'
            />
            <p
              className='montserrat-light-14 text-white'
              style={{ marginTop: '0.5rem' }}>
              AARON
            </p>
            <a
              href='https://dummylink.com'
              className='page-link cinzel-decorative-bold-18 text-light-gold mt-32'
              target='_blank'
              rel='noreferrer'>
              SEE MORE REVIEWS
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Reviews;
