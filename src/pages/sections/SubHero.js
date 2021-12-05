import { Link } from 'react-router-dom';

import Champagne from '../../assets/champagne.svg';

import './SubHero.css';

const SubHero = () => {
  return (
    <div className='SubHero'>
      <div className="container-1100 SubHero-container ptb-84">
        <div className="SubHero-left">
          <img src={Champagne} alt="Bottle" />
          <h1>A Taste of <span>VIP</span></h1>
          <p>Whether you are looking to invest in Vegas real estate or just want to get a taste of how the locals live while seeing some beautiful homes, we are happy to give you a personalized tour! Get decorating ideas, and be inspired by the creative attention to detail these properties possess.</p>
          <Link to='/book'>BOOK YOUR TOUR NOW</Link>
        </div>
        <div className="SubHero-right">Right</div>
      </div>
    </div>
  );
};

export default SubHero;
