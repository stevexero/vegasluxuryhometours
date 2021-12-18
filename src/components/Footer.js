import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer ptb-84'>
      <div className='Footer-head'>
        <input type='text' placeholder='JOIN OUR MAILING LIST' />
        <button className='btn-footer'>SUBSCRIBE</button>
      </div>
      <div className='Footer-body ptb-84'>
        <Link to='/attributions'>Attributions</Link>
      </div>
      <div className='Footer-foot'>foot</div>
    </footer>
  );
};

export default Footer;
