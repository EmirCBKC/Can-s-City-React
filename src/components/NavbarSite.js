import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

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

                    <div className="basket me-2">
                        <button id="basket" className="btn"><FontAwesomeIcon className='basket-icon' icon={faBasketShopping} size="2xl" style={{ color: "#00ffff" }} />
                        </button>
                        <div id="basket" className="basket-content">
                            <div className="order-button d-flex align-items-center justify-content-center">
                            </div>
                        </div>
                    </div>

                    <div className="user-login">
                        <button id="user" className="btn"><FontAwesomeIcon className='user-icon' icon={faUser} size="2xl" style={{ color: "#00ffff" }} />
                        </button>
                        <div className="user-content">
                            <div className="user-login-content d-flex flex-column align-items-center justify-content-center">
                                <div className="form">
                                    <div className="username d-flex justify-content-end align-items-center">
                                        <label className="me-3">Username: </label>
                                        <input id="username" type="text" placeholder="username"></input>
                                    </div>
                                    <div className="password d-flex justify-content-end align-items-center">
                                        <label className="me-3">Password: </label>
                                        <input id="password" type="password" placeholder="password"></input>
                                    </div>
                                    <div className="remember d-flex justify-content-end">
                                        <label className="me-1">Remember Me</label>
                                        <input id="remember" type="checkbox"></input>
                                    </div>
                                    <div className="form-buttons d-flex justify-content-end">
                                        <button id="login" className="mt-2 me-4">Login</button>
                                        <a href="/signup.html" className="mt-2 d-flex justify-content-center align-items-center">Sign Up</a>
                                    </div>
                                </div>
                                <div className="login" style={{ display: "none" }}>
                                    <h1>WELCOME </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </Navbar>

            </div>
        </>
    )
}

export default NavbarSite;