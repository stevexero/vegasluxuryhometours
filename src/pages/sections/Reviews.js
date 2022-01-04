import { Parallax } from 'react-parallax';
import { useMediaQuery } from 'react-responsive';

import ReviewsBackground from '../../assets/reviews_bg.jpeg';
import Aaron from '../../assets/aaron.jpeg';

import './Reviews.css';

const Reviews = () => {
  const isMobileSmall = useMediaQuery({ query: '(max-width: 320px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 414px)' });
  const isTabletSmall = useMediaQuery({ query: '(max-width: 768px)' });

  const insideStyles = {
    width: isTabletSmall ? '700px' : isMobile ? '300px' : '1100px',
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
        <div
          style={{
            height: isTabletSmall ? 700 : isMobile ? 800 : 600,
            background: 'rgba(0,0,0,0.75)',
          }}
          className='Reviews-text-container'>
          <div style={insideStyles} className='Reviews-text-session'>
            <h1
              className={`${
                isMobile ? 'cinzel-regular-24' : 'cinzel-regular-56'
              } text-light-gold`}
              style={{
                width: isTabletSmall ? '700px' : isMobile ? '300px' : '1000px',
                padding: isMobileSmall ? '1.2rem' : 0,
              }}>
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
