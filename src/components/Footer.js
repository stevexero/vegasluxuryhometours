import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <h1>Footer</h1>
      <Link to='/attributions'>Attributions</Link>
    </footer>
  );
};

export default Footer;
