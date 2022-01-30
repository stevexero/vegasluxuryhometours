import { useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import './Book.css';

const Book = () => {
  // const isMobileSmall = useMediaQuery({ query: '(max-width: 320px)' });
  // const isMobile = useMediaQuery({ query: '(max-width: 414px)' });
  // const isTabletSmall = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const script = document.createElement('script');

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
      }}>
      <div className='Book-container'>
        <div
          className='calendly-inline-widget'
          data-url='https://calendly.com/vegasluxuryhometours?background_color=ffffff&text_color=606167&primary_color=0000ff'
          style={{ minWidth: '320px', height: '100%' }}></div>
      </div>
    </motion.div>
  );
};

export default Book;
