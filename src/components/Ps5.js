import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GamesData from './GamesData';
import NavbarSite from './NavbarSite';

const Ps5GameList = () => {

    const [ps5Game, setPs5Game] = useState([]);

    useEffect(() => {
        setPs5Game(GamesData);
    }, []);

    const ps5Games = ps5Game.filter(element => element.title === "PS5" && element.edition.edition_name === "STANDART");

    const handleSortAscClick = () => {
        setPs5Game(ps5Games.sort((a, b) => a.edition.price - b.edition.price));
    };

    const handleSortDescClick = () => {
        setPs5Game(ps5Games.sort((a, b) => b.edition.price - a.edition.price));
    };

    const handleInputChange = () => {
        const lowerCaseSearchValue = document.querySelector("#ps5_search").value.toLowerCase();
        const filteredResult = ps5Games.filter(element => element.edition.game_name.toLowerCase().includes(lowerCaseSearchValue));
        setPs5Game(filteredResult);
        console.log(ps5Games);
    }

    const [basket, setBasket] = useState([]);

    const addBasket = (productIdToAdd) => {
        if (!basket.some(item => item.id === productIdToAdd)) {
            setBasket([...basket, ps5Games.filter(element => element.id === productIdToAdd)]);
        }
    }

    return (
        <>
        <NavbarSite dataPS5={basket} array={ps5Games}/>
            <div className="ps5-filter d-flex justify-content-around align-items-center mt-5 mb-5">
                <button onClick={handleSortAscClick} id="lowPs5" className="btn btn-danger">Low Price$</button>
                <button onClick={handleSortDescClick} id="highPs5" className="btn btn-danger">High Price$</button>
                <input onChange={handleInputChange} id="ps5_search" className="text-center" type="text" placeholder="search"></input>
            </div>

            <div className="ps5-content p-3">
                <div id="ps5" className="ps5-row p-5 row">
                    {ps5Games.map((element) => (
                        <div key={element.id} className="mt-5 mb-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="ps5-game d-flex flex-column align-items-center">
                                <div className="p-4 d-flex flex-column align-items-center">
                                    <img src={element.edition.img} alt="" width="100%" height="400px"></img>
                                    <h1 className="text-center mt-2">{element.edition.game_name}</h1>
                                    <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                                    <Link to={`/detail/${element.id}`} className="btn btn-light mt-2">Go detail</Link>
                                    <button id={element.id} onClick={()=> addBasket(element.id)} className="add-basket mt-2">Add Basket</button>
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

                <Ps5GameList />

            </div>

        </>
    )
}

export default Ps5;