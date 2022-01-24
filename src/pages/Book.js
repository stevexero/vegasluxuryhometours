import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import './Book.css';

const Book = () => {
  // const isMobileSmall = useMediaQuery({ query: '(max-width: 320px)' });
  // const isMobile = useMediaQuery({ query: '(max-width: 414px)' });
  const isTabletSmall = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const script = document.createElement('script');

    // script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <motion.div
      className='Book'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <div className='Book-container'>
        {/* {isTabletSmall ? (
          <div
            className='airbnb-embed-frame'
            data-id='2649345'
            data-view='experience_booking'
            data-vertical='true'
            data-currency='USD'>
            <a href='https://www.airbnb.com/experiences/2649345?source=booking_widget'>
              View On Airbnb
            </a>
            <a
              href='https://www.airbnb.com/experiences/2649345?source=booking_widget'
              rel='nofollow'>
              {''}
            </a>
          </div>
        ) : (
          <div
            className='airbnb-embed-frame'
            data-id='2649345'
            data-view='experience_booking'
            data-image='true'
            data-title_and_info='true'
            data-currency='USD'>
            <a href='https://www.airbnb.com/experiences/2649345?source=booking_widget'>
              View On Airbnb
            </a>
            <a
              href='https://www.airbnb.com/experiences/2649345?source=booking_widget'
              rel='nofollow'>
              {''}
            </a>
          </div>
        )} */}
        <div
          className='calendly-inline-widget'
          data-url='https://calendly.com/redrunedigital?background_color=ffffff&text_color=606167&primary_color=0000ff'
          style={{ minWidth: '320px', height: '1130px' }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Book;
