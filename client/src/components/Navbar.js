import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
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
              { true ? <NavItem><RegisterModal /></NavItem> : null}
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