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
        <Link to='/attributions'>Attributions</Link>
      </div>
      <div className='Footer-foot'>foot</div>
    </footer>
  );
};

export default Footer;
