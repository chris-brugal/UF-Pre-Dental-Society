import React from 'react';
import "./Navbar.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle= this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
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
              <NavItem><NavLink href="/sign-in">ADMIN LOG IN</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}