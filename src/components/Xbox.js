import Image from './main-img/xbox/background.jpg';

function Xbox() {
    return (
        <>
            <div className="xbox-background d-flex justify-content-center flex-column align-items-center">
                <div data-aos="fade-up">
                    <div className="header">
                        <img src={Image} width="100%" height="100%"></img>
                    </div>
                </div>

                <div className="xbox-filter d-flex justify-content-around align-items-center mt-5 mb-5">
                    <button id="lowXbox" className="btn btn-danger">Low Price$</button>
                    <button id="highXbox" className="btn btn-danger">High Price$</button>
                    <input id="xbox_search" className="text-center" type="text" placeholder="search"></input>
                </div>

                <div className="xbox-content p-3">
                    <div id="xbox" className="xbox-row p-5 row">

                    </div>
                </div>

            </div>
        </>
    )
}

export default Xbox;