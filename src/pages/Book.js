import { useEffect } from 'react';
import './Book.css';

const Book = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className='Book'>
      <div className='Book-container'>
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
      </div>
    </div>
  );
};

export default Book;
