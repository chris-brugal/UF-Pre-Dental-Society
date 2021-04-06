import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className="logo" src="./images/logo.jpg" alt="UFPDS Logo"/>
            UF Pre-Dental Society
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
            </li>
            <li className='nav-item'>
              <Link to='/our-officers' className='nav-links' onClick={closeMobileMenu}>OFFICERS</Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-links' onClick={closeMobileMenu}>EVENTS</Link>
            </li>
            <li className='nav-item'>
              <Link to='/points' className='nav-links' onClick={closeMobileMenu}>POINTS</Link>
            </li>
            <li className='nav-item'>
              <Link to='/join-us' className='nav-links' onClick={closeMobileMenu}>JOIN US!</Link>
            </li>
            <li>
              <Link to='/sign-in'className='nav-links-mobile'onClick={closeMobileMenu}>SIGN IN</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;