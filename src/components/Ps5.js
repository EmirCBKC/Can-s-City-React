import React, { useState, useEffect } from 'react';
import GamesData from './GamesData';

const Ps5GameAPI = () => {
    const [ps5Game, setps5Game] = useState([]);


    useEffect(() => {
        setps5Game(GamesData);
    }, []);

    let ps5Games = ps5Game.filter(element => element.title === "PS5" && element.edition.edition_name === "STANDART");

    function LowClick() {
        let lowPrices = ps5Games.sort((a, b) => a.edition.price - b.edition.price);
        console.log(lowPrices);
        return (
            <>
                {lowPrices.map((element) => (
                    <div key={element.id} className="mt-5 mb-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pc-game d-flex flex-column align-items-center">
                            <div className="p-4 d-flex flex-column align-items-center">
                                <img src={element.edition.img} alt="" width="100%" height="400px"></img>
                                <h1 className="text-center mt-2">{element.edition.game_name}</h1>
                                <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                                <a href="/detail.html?id={element.id}" className="btn btn-light mt-2">Go detail</a>
                                <button id={element.id} className="add-basket mt-2">Add Basket</button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    function HighClick (){
        let highPrices = ps5Games.sort((a, b) => a.edition.price - b.edition.price).reverse();
        console.log(highPrices);
        return (
            <>
                {highPrices.map((element) => (
                    <div key={element.id} className="mt-5 mb-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pc-game d-flex flex-column align-items-center">
                            <div className="p-4 d-flex flex-column align-items-center">
                                <img src={element.edition.img} alt="" width="100%" height="400px"></img>
                                <h1 className="text-center mt-2">{element.edition.game_name}</h1>
                                <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                                <a href="/detail.html?id={element.id}" className="btn btn-light mt-2">Go detail</a>
                                <button id={element.id} className="add-basket mt-2">Add Basket</button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <div className="ps5-filter d-flex justify-content-around align-items-center mt-5 mb-5">
                <button onClick={LowClick} id="lowPs5" className="btn btn-danger">Low Price$</button>
                <button onClick={HighClick} id="highPs5" className="btn btn-danger">High Price$</button>
                <input id="ps5_search" className="text-center" type="text" placeholder="search"></input>
            </div>

            <div className="ps5-content p-3">
                <div id="ps5" className="ps5-row p-5 row">
                    {ps5Games.map((element) => (
                        <div key={element.id} className="mt-5 mb-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="pc-game d-flex flex-column align-items-center">
                                <div className="p-4 d-flex flex-column align-items-center">
                                    <img src={element.edition.img} alt="" width="100%" height="400px"></img>
                                    <h1 className="text-center mt-2">{element.edition.game_name}</h1>
                                    <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                                    <a href="/detail.html?id=${element.id}" className="btn btn-light mt-2">Go detail</a>
                                    <button id="${element.id}" className="add-basket mt-2">Add Basket</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

function Ps5() {
    return (
        <>
            <div className="ps5-background d-flex justify-content-center flex-column align-items-center">

                <div data-aos="fade-up">
                    <div className="header">
                        <img src="/main-img/ps5/background.jpg" alt='' width="100%" height="100%"></img>
                    </div>
                </div>

                <Ps5GameAPI/>

            </div>

        </>
    )
}

export default Ps5;