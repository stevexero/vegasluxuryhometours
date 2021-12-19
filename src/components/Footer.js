import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer ptb-84'>
      <div className='Footer-head'>
        <input type='text' placeholder='JOIN OUR MAILING LIST' />
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: 'spring',
            },
          }}
          className='btn-footer alfa-slab-one-18'>
          SUBSCRIBE
        </motion.button>
      </div>
      <div className='Footer-body ptb-84'>
        <div className='Footer-body-left'>
          <h3 className='rajdhani-bold-18 text-white'>FOLLOW US!</h3>
        </div>
        <div className='Footer-body-center'>
          <h3 className='rajdhani-bold-18 text-white'>COMPANY</h3>
        </div>
        <div className='Footer-body-right'>
          <h3 className='rajdhani-bold-18 text-white'>SUPPORT</h3>
          <Link to='/attributions'>Attributions</Link>
        </div>
      </div>
      <div className='Footer-foot'>foot</div>
    </footer>
  );
};

export default Footer;
