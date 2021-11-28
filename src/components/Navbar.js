import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className='Navbar-container'>
        <div className='Navbar-left'>
          <Link className='rajdhani-bold-24 nav-link' to='/'>
            Home
          </Link>
          <Link className='rajdhani-bold-24 nav-link' to='/about'>
            About
          </Link>
        </div>
        <div className='Navbar-right'>
          <Link className='rajdhani-bold-24 nav-link' to='/contact'>
            Contact
          </Link>
          <Link className='rajdhani-bold-24 nav-link' to='/book'>
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
