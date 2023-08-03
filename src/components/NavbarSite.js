import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'

function NavbarSite({dataPC=[],dataPS5=[],dataXBOX=[]}) {
    console.log(dataPC,"NAVBAR-pc");
    console.log(dataPS5,"NAVBAR-ps5");
    console.log(dataXBOX,"NAVBAR-xbox");
    const mixData = dataPC.concat(dataPS5, dataXBOX);
    console.log(mixData,"Mix Data");



    const [basketBtn, setBasketBtn] = useState("none");
    const basketClick = () => {
        if (basketBtn === "none") {
            setBasketBtn("block");
            setUserBtn("none");
        } else {
            setBasketBtn("none");
        }
    }

    const [userBtn, setUserBtn] = useState("none");
    const userClick = () => {
        if (userBtn === "none") {
            setUserBtn("block");
            setBasketBtn("none");
        } else {
            setUserBtn("none");
        }
    }

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
                        <button id="basket" onClick={basketClick} className="btn"><FontAwesomeIcon className='basket-icon' icon={faBasketShopping} size="2xl" style={{ color: "#00ffff" }} />
                        </button>
                        <div id="basket" className="basket-content" style={{ display: basketBtn }}>
                            <div className="order-button d-flex align-items-center justify-content-center">
                                {/* {mixData.map((element) => (
                                    <>
                                        <div key={element.id} className="basket-game m-auto mt-3 p-2 row">
                                            <div className="basket-left col-xxl-4 col-xl-4" style={{
                                                backgroundImage: `url(${element.edition.img})`,
                                                backgroundPosition: "top",
                                                backgroundSize: "cover",
                                                borderRadius: "15px",
                                                border: "2px solid black"
                                            }}>
                                            </div>
                                            <div className="basket-right d-flex flex-column justify-content-center align-items-center col-8">
                                                <h3>{element.edition.game_name}</h3>
                                                <h4>{element.edition.edition_name}</h4>
                                                <h4>{element.edition.price}$</h4>
                                                <button className="btn btn-danger remove-button">Remove Basket</button>
                                            </div>
                                        </div>
                                        <div className="order-button"><a href="/complete-order.html" className="btn order btn-success mt-2">Complete Order</a></div>
                                    </>
                                ))} */}
                            </div>
                        </div>
                    </div>

                    <div className="user-login">
                        <button id="user" onClick={userClick} className="btn"><FontAwesomeIcon className='user-icon' icon={faUser} size="2xl" style={{ color: "#00ffff" }} />
                        </button>
                        <div className="user-content" style={{ display: userBtn }}>
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