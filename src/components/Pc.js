import Image from './main-img/pc/background.jpg';

function Pc() {
    return(
        <>
        <div className="pc-background d-flex justify-content-center flex-column align-items-center">
        <div data-aos="fade-up">
            <div className="header">
                <img src={Image} width="100%" height="100%"></img>
            </div>
        </div>

        <div className="pc-filter d-flex justify-content-around align-items-center mt-5 mb-5">
            <button id="lowPc" className="btn btn-danger">Low Price$</button>
            <button id="highPc" className="btn btn-danger">High Price$</button>
            <input id="pc_search" className="text-center" type="text" placeholder="search"></input>
        </div>

        <div className="pc-content p-3">
            <div id="pc" className="pc-row p-5 row">
                
            </div>
        </div>

    </div>
        </>
    )
}

export default Pc;