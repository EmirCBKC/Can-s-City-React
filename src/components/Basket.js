import React from 'react';

function Basket() {
    return (
        <>
            {/* {basket.map((element) => (
                <>
                    <div className="basket-game m-auto mt-3 p-2 row">
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
        </>
    )
}

export default Basket;