import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import BasketUserNav from './BasketUserNav';

function NavbarSite() {

    return (
        <>
            <div className="nav">

                <Navbar expand="lg">

                    <Link className='navbar-brand ms-3' to="/home">Can's City</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Games" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/pc">Pc</Link>
                                <Link className='dropdown-item' to="/ps5">Playstation 5</Link>
                                <Link className='dropdown-item' to="/xbox">Xbox</Link>
                            </NavDropdown>
                            <Link className='nav-link' to="/community">Community</Link>
                            <Link className='nav-link' to="/about">About Us</Link>
                            <Link className='nav-link' to="/contact">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <BasketUserNav/>

                </Navbar>

            </div>
        </>
    )
}

export default NavbarSite;