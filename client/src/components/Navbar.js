import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import PropTypes from "prop-types";
import './Navbar.css';

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
      <div className="navbar-container-fluid">
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand to="/home" tag={RRNavLink}><img className="logo" src="./images/logo.jpg" alt="UFPDS Logo" height="55px" width="55px"/></NavbarBrand>
          <NavbarBrand to="/home" tag={RRNavLink}>UF Pre-Dental Society</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink to="/home" tag={RRNavLink}>HOME</NavLink></NavItem>
              <NavItem><NavLink to="/our-officers" tag={RRNavLink}>OFFICERS</NavLink></NavItem>
              <NavItem><NavLink to="/events" tag={RRNavLink}>EVENTS</NavLink></NavItem>
              <NavItem><NavLink to="/points" tag={RRNavLink}>POINTS</NavLink></NavItem>
              <NavItem><NavLink to="/join-us" tag={RRNavLink}>JOIN US</NavLink></NavItem>
              { this.props.isAuthenticated ? 
              <NavItem><Logout /></NavItem> :
              <NavItem><LoginModal /></NavItem> }
              { false   ? <NavItem><RegisterModal /></NavItem> : null}
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
