import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Champagne from '../../assets/champagne.svg';
import img1 from '../../assets/subhero1.jpeg';
import img2 from '../../assets/subhero2.jpeg';
import img3 from '../../assets/subhero3.jpeg';
import img4 from '../../assets/subhero4.jpeg';
import img5 from '../../assets/hero_img.jpeg';
import img6 from '../../assets/subhero6.jpeg';

import './SubHero.css';

const SubHero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 414px)' });

  return (
    <div className='SubHero'>
      <div
        className={`${
          isMobile ? '' : 'container-1100'
        } SubHero-container ptb-84`}>
        <div className='SubHero-left'>
          <div className='SubHero-left-header'>
            {isMobile ? null : (
              <img src={Champagne} alt='Bottle' className='SubHero-left-icon' />
            )}
            <h1
              className={`SubHero-left-title ${
                isMobile ? 'cinzel-regular-36' : 'cinzel-regular-56'
              } text-light-silver`}>
              A Taste of{' '}
              <span
                className={`${
                  isMobile ? 'cinzel-bold-36' : 'cinzel-bold-56'
                } text-dark-gold`}>
                VIP
              </span>
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
              className='SubHero-left-link page-link cinzel-decorative-bold-18 text-dark-gold'>
              BOOK YOUR TOUR NOW
            </Link>
          </div>
        </div>
        {isMobile ? null : (
          <div className='SubHero-right'>
            <img src={img1} alt='img' className='SubHero-left-img' />
            <img src={img2} alt='img' className='SubHero-left-img' />
            <img src={img3} alt='img' className='SubHero-left-img' />
            <img src={img4} alt='img' className='SubHero-left-img' />
            <img src={img5} alt='img' className='SubHero-left-img' />
            <img src={img6} alt='img' className='SubHero-left-img' />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHero;
