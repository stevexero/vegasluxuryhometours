import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import './Book.css';

const Book = () => {
  const isMobileSmall = useMediaQuery({ query: '(max-width: 320px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 414px)' });
  const isTabletSmall = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className='Book'>
      <div className='Book-container'>
        {isTabletSmall ? (
          <div
            class='airbnb-embed-frame'
            data-id='2649345'
            data-view='experience_booking'
            data-vertical='true'
            data-currency='USD'>
            <a href='https://www.airbnb.com/experiences/2649345?source=booking_widget'>
              View On Airbnb
            </a>
            <a
              href='https://www.airbnb.com/experiences/2649345?source=booking_widget'
              rel='nofollow'></a>
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
              rel='nofollow'></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
