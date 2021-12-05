import { Link } from 'react-router-dom';

import Champagne from '../../assets/champagne.svg';

import './SubHero.css';

const SubHero = () => {
  return (
    <div className='SubHero'>
      <div className='container-1100 SubHero-container ptb-84'>
        <div className='SubHero-left'>
          <div className='SubHero-left-header'>
            <img src={Champagne} alt='Bottle' className='SubHero-left-icon' />
            <h1 className='SubHero-left-title cinzel-regular-56 text-light-silver'>
              A Taste of{' '}
              <span className='cinzel-bold-56 text-dark-gold'>VIP</span>
            </h1>
          </div>
          <div className='SubHero-left-body'>
            <p className='SubHero-left-text montserrat-regular-14 text-dark-silver'>
              Whether you are looking to invest in Vegas real estate or just
              want to get a taste of how the locals live while seeing some
              beautiful homes, we are happy to give you a personalized tour! Get
              decorating ideas, and be inspired by the creative attention to
              detail these properties possess.
            </p>
          </div>
          <div className='SubHero-left-footer'>
            <Link
              to='/book'
              className='SubHero-left-link cinzel-decorative-bold-18 text-dark-gold'>
              BOOK YOUR TOUR NOW
            </Link>
          </div>
        </div>
        <div className='SubHero-right'>Right</div>
      </div>
    </div>
  );
};

export default SubHero;
