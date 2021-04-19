/*import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
            <li className='nav-item'>
              <LoginModal onClick={closeMobileMenu}/>
            </li>
            <li className='nav-item'>
              <Logout onClick={closeMobileMenu}/>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

*/
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle= this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/"><img className="logo" src="./images/logo.jpg" alt="UFPDS Logo" height="55px" width="55px"/></NavbarBrand>
          <NavbarBrand href="/">UF Pre-Dental Society</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="/">HOME</NavLink></NavItem>
              <NavItem><NavLink href="/our-officers">OFFICERS</NavLink></NavItem>
              <NavItem><NavLink href="/events">EVENTS</NavLink></NavItem>
              <NavItem><NavLink href="/points">POINTS</NavLink></NavItem>
              <NavItem><NavLink href="/join-us">JOIN US</NavLink></NavItem>
              { this.props.isAuthenticated ? 
              <NavItem><Logout /></NavItem> :
              <NavItem><LoginModal /></NavItem> }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Header);