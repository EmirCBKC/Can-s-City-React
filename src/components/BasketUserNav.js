import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'

function BasketUserNav() {
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
            <div className="basket me-2">
                <button id="basket" onClick={basketClick} className="btn"><FontAwesomeIcon className='basket-icon' icon={faBasketShopping} size="2xl" style={{ color: "#00ffff" }} />
                </button>
                <div id="basket" className="basket-content" style={{ display: basketBtn }}>
                    <div className="order-button d-flex align-items-center justify-content-center">
                        
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
        </>
    )
}
export default BasketUserNav;