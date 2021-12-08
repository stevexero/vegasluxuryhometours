import Arrow from '../assets/right_arrow.svg';
import Champagne from '../assets/champagne.svg';

import './Attributions.css';

const Attributions = () => {
  return (
    <div className='Attributions'>
      <div className='Attributions-container'>
        <h1>Attributions</h1>
        <img src={Arrow} alt='arrow' />
        <a
          href='https://thenounproject.com/icon/arrow-2335767/'
          target='_blank'
          rel='noreferrer'>
          Arrow by Ghiyats Mujtaba - The Noun Project
        </a>
        <img src={Champagne} alt='champagne' />
        <a
          href='https://thenounproject.com/icon/champagne-2154243/'
          target='_blank'
          rel='noreferrer'>
          Champagne by Made x Made - The Noun Project
        </a>
      </div>
    </div>
  );
};

export default Attributions;
