import React, { useState } from "react";

function CompleteOrder() {


    const getBasket = localStorage.getItem("Basket Local")
    const basket = JSON.parse(getBasket);

    const [baskets, setBaskets] = useState(basket);
    const removeBasket = (productIdToAdd) => {
        let getGame = basket.find(element => element.id === productIdToAdd)
        setBaskets(basket.splice(basket.indexOf(getGame), 1));
        const savedBasket = JSON.stringify(basket);
        localStorage.setItem("Basket Local", savedBasket);
    }


    return (
        <>
            <div className="complete-order-background d-flex flex-column align-items-center">

                <div className="complete-order-content d-flex flex-column align-items-center p-5 mt-5">
                    <div className="order-row justify-content-center row mt-4 mb-2 p-5">
                        {basket.map((element) => (
                            <>
                                <div key={element.id} className="mb-5 mt-5 col-xxl-4 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="order-image" style={{
                                        backgroundImage: `url(${element.edition.img})`,
                                        width: "100%",
                                        height: "10rem",
                                        backgroundSize: "cover",
                                        backgroundPosition: "top",
                                        borderRadius: "15px",
                                        border: "2px solid #00ffff"
                                    }}>
                                    </div>
                                </div>
                                <div className="p-2 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mt-4 order-info d-flex flex-column justify-content-center align-items-center">
                                        <h1>{element.edition.game_name}</h1>
                                        <h2>{element.edition.edition_name}</h2>
                                        <h2>{element.edition.price}$</h2>
                                        <button id={element.id} onClick={()=>removeBasket(element.id)} className="btn btn-danger remove-button-complete">Remove Basket</button>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="pay d-flex flex-column align-items-center mb-5">
                    <div className="pay-row row justify-content-end">
                        <div className="discount-col d-flex justify-content-center mt-3 mb-3 col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="discount d-flex align-items-center justify-content-center">
                                <label className="me-2">Enter Discount Code:</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="pay-col d-flex justify-content-center mt-3 mb-3 col-xxl-2 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="go-pay d-flex align-items-center justify-content-center">
                                <button className="pay-button">Go to pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteOrder;