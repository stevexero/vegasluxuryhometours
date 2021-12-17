import { Link } from 'react-router-dom';

import './BottomHero.css';

const BottomHero = () => {
  return (
    <div className='BottomHero ptb-168'>
      <div className='BottomHero-container container-1100'>
        <p className='cinzel-regular-56 text-light-silver'>
          Let us do the research and create a tour of the Las Vegas luxury
          lifestyle tailored just for you.
        </p>
        <Link
          to='/book'
          className='SubHero-left-link page-link cinzel-decorative-bold-18 text-dark-gold mt-64'>
          BOOK YOUR TOUR NOW
        </Link>
      </div>
    </div>
  );
};

export default BottomHero;
