import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GamesData from './GamesData';
import NavbarSite from './NavbarSite';

const XboxGameList = () => {

    const [xboxGame, setXboxGame] = useState([]);

    useEffect(() => {
        setXboxGame(GamesData);
    }, []);

    const xboxGames = xboxGame.filter(element => element.title === "XBOX" && element.edition.edition_name === "STANDART");

    const handleSortAscClick = () => {
        setXboxGame(xboxGames.sort((a, b) => a.edition.price - b.edition.price));
    };

    const handleSortDescClick = () => {
        setXboxGame(xboxGames.sort((a, b) => b.edition.price - a.edition.price));
    };

    const handleInputChange = () => {
        const lowerCaseSearchValue = document.querySelector("#xbox_search").value.toLowerCase();
        const filteredResult = xboxGames.filter(element => element.edition.game_name.toLowerCase().includes(lowerCaseSearchValue));
        setXboxGame(filteredResult);
        console.log(xboxGames);
    }

    const [basket, setBasket] = useState([]);

    const addBasket = (productIdToAdd) => {
        if (!basket.some(item => item.id === productIdToAdd)) {
            setBasket([...basket, xboxGames.filter(element => element.id === productIdToAdd)]);
        }
    }

    return (
        <>
        <NavbarSite dataXBOX={basket} array={xboxGames}/>
            <div className="xbox-filter d-flex justify-content-around align-items-center mt-5 mb-5">
                <button onClick={handleSortAscClick} id="lowXbox" className="btn btn-danger">Low Price$</button>
                <button onClick={handleSortDescClick} id="highXbox" className="btn btn-danger">High Price$</button>
                <input onChange={handleInputChange} id="xbox_search" className="text-center" type="text" placeholder="search"></input>
            </div>

            <div className="xbox-content p-3">
                <div id="xbox" className="xbox-row p-5 row">
                    {xboxGames.map((element) => (
                        <div key={element.id} className="mt-5 mb-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="xbox-game d-flex flex-column align-items-center">
                                <div className="p-4 d-flex flex-column align-items-center">
                                    <img src={element.edition.img} alt="" width="100%" height="400px"></img>
                                    <h1 className="text-center mt-2">{element.edition.game_name}</h1>
                                    <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                                    <Link to={`/detail/${element.id}`} className="btn btn-light mt-2">Go detail</Link>
                                    <button id={element.id} onClick={()=>addBasket(element.id)} className="add-basket mt-2">Add Basket</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

function Xbox() {
    return (
        <>
            <div className="xbox-background d-flex justify-content-center flex-column align-items-center">
                <div data-aos="fade-up">
                    <div className="header">
                        <img src="/main-img/xbox/background.jpg" alt='' width="100%" height="100%"></img>
                    </div>
                </div>

                <XboxGameList/>

            </div>
        </>
    )
}

export default Xbox;