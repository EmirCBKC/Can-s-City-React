import React from 'react';
import { useParams } from 'react-router-dom';
import GamesData from './GamesData';

function Detail() {
    const { id } = useParams();
    const element = GamesData.find((item) => item.id === parseInt(id));
    const elementDeluxe = GamesData.find((item) => item.edition.edition_name === "DELUXE" && item.edition.game_name === element.edition.game_name);
    const elementUltimate = GamesData.find((item) => item.edition.edition_name === "COLLECTOR" && item.edition.game_name === element.edition.game_name);

    return (
        <>
            <div className="detail-background d-flex justify-content-center flex-column align-items-center"
                style={{
                    background: `linear-gradient(to top,rgba(0, 0, 0, 0.62) 25%,rgba(0, 0, 0, 0.277) 90%),url(${element.background_image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "auto",
                    backgroundRepeat: "no-repeat"
                }}>

                <div className="detail-content mt-5 p-3">
                    <div className="brand d-flex flex-column align-items-center"><h1 className="text-center p-3 mt-5">{element.edition.game_name}</h1></div>
                    <div className="detail-top-row mt-5 mb-5 row justify-content-center">
                        <div className="left-col mt-3 mb-3 col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="left-detail d-flex justify-content-center" style={{
                                width: "100%",
                                height: "45rem",
                                backgroundColor: "#4158D0",
                                backgroundImage: "linear-gradient(43deg, #010712 0%, #010815e4 46%, #04112996 100%)",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                borderRadius: "40px",
                                border: "2px solid #00ffff"
                            }}>
                                <img src={element.left_png} alt="" style={{ filter: `drop-shadow(0px 0px 50px ${element.png_shadow_color})` }}></img>
                            </div>
                        </div>
                        <div className="mt-3 mb-3 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="video-detail d-flex justify-content-center" style={{
                                width: "100%",
                                height: "45rem",
                                backgroundColor: "rgba(0, 0, 0, 0.326)",
                                borderRadius: "40px",
                                border: "2px solid #00ffff"
                            }}>
                                <iframe width="100%" height="100%" src={element.iframe} title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="right-col mt-3 mb-3 col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="right-detail d-flex justify-content-center" style={{
                                width: "100%",
                                height: "45rem",
                                backgroundColor: "#4158D0",
                                backgroundImage: "linear-gradient(43deg, #010712 0%, #010815e4 46%, #04112996 100%)",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                borderRadius: "40px",
                                border: "2px solid #00ffff"
                            }}>
                                <img src={element.right_png} alt="" style={{ filter: `drop-shadow(0px 0px 50px ${element.png_shadow_color})` }}></img>
                            </div>
                        </div>
                    </div>

                    <div className="detail-middle-row mt-5 mb-5 row justify-content-center">
                        <div className="standart-col mt-3 mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="standart-detail">
                                <div className="standart-game d-flex flex-column align-items-center justify-content-end" style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "4px solid #00ffff",
                                    backgroundImage: `url(${element.edition.img})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    borderRadius: "30px",
                                    boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                                }}>
                                    <div className="s-game p-4 d-flex flex-column align-items-center">
                                        <h1 className="edition">{element.edition.edition_name}</h1>
                                        <ul className="mt-4">
                                            <li>Id consequuntur accusantium aliquid voluptatibus nisi odit dolorum sed
                                                cumque
                                                minima porro tempore.</li>
                                            <li>Id consequuntur accusantium aliquid voluptatibus nisi odit dolorum sed
                                                cumque
                                                minima porro tempore.</li>
                                        </ul>
                                        <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                                        <button id={element.id} className="add-basket mt-2" value={element.edition.game_name}>Add Basket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="deluxe-col mt-3 mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="deluxe-detail">
                                <div className="deluxe-game d-flex flex-column align-items-center justify-content-end" style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "4px solid #00ffff",
                                    backgroundImage: `url(${elementDeluxe.edition.img})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    borderRadius: "30px",
                                    boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                                }}>
                                    <div className="d-game p-4 d-flex flex-column align-items-center">
                                        <h1 className="edition">{elementDeluxe.edition.edition_name}</h1>
                                        <ul className="mt-4">
                                            <li>Id consequuntur accusantium aliquid voluptatibus nisi odit dolorum sed
                                                cumque
                                                minima porro tempore.</li>
                                            <li>Id consequuntur accusantium aliquid voluptatibus nisi odit dolorum sed
                                                cumque
                                                minima porro tempore.</li>
                                        </ul>
                                        <h2 className="text-center price mt-2">{elementDeluxe.edition.price}$</h2>
                                        <button id={elementDeluxe.id} className="add-basket mt-2" value={elementDeluxe.edition.game_name}>Add Basket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ultimate-col mt-3 mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="ultimate-detail">
                                <div className="ultimate-game d-flex flex-column align-items-center justify-content-end" style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "4px solid #00ffff",
                                    backgroundImage: `url(${elementUltimate.edition.img})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    borderRadius: "30px",
                                    boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                                }}>
                                    <div className="u-game p-4 d-flex flex-column align-items-center">
                                        <h1 className="edition">{elementUltimate.edition.edition_name}</h1>
                                        <ul className="mt-4">
                                            <li>Id consequuntur accusantium aliquid voluptatibus nisi odit dolorum sed
                                                cumque
                                                minima porro tempore.</li>
                                            <li>Id consequuntur accusantium aliquid voluptatibus nisi odit dolorum sed
                                                cumque
                                                minima porro tempore.</li>
                                        </ul>
                                        <h2 className="text-center price mt-2">{elementUltimate.edition.price}$</h2>
                                        <button id={elementUltimate.id} className="add-basket mt-2" value={elementUltimate.edition.game_name}>Add Basket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-bottom-row mt-5 mb-5 row justify-content-center">
                        <div className="mt-3 mb-3 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="image-detail" style={{
                                width: "100%",
                                height: "40rem",
                                backgroundColor: "rgba(46, 0, 86, 0.332)",
                                borderRadius: "40px",
                                border: "2px solid #00ffff",
                                backgroundImage: `url(${element.image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                            }}>
                            </div>
                        </div>
                        <div className="mt-3 mb-3 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="about-detail" style={{ border: "2px solid #00ffff" }}>
                                <p className="text-center p-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                                    consequuntur ipsam in soluta deserunt quis doloribus voluptates ullam non fugiat!
                                    Voluptatibus, similique! Soluta ducimus, iste saepe atque dolores dolorem praesentium?
                                    Distinctio ipsa magnam voluptatum, eveniet quos, tempora unde, repellendus maxime
                                    aliquid
                                    quo fugit quidem perspiciatis. Nobis similique voluptate tempore ad aperiam assumenda
                                    molestiae voluptates, vitae quaerat reiciendis earum optio! Adipisci.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Detail;