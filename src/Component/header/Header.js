import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../img/logo.png';

import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="thomson-navbar">
        <Container fluid>
          <Link className="navbar-brand" to="/">
            <div className="logo-part">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                  <NavLink to="/" end>Home</NavLink>
                </li>
                <li className="nav-item dropdown megamenu">
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>

                    <NavLink to="/about">About</NavLink>

                  </NavDropdown>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/support">Support</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavDropdown title="Dropdown2" id="basic-nav-dropdown">

                    <NavDropdown.Item href="#action/3.1">Action2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something2</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link2
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header