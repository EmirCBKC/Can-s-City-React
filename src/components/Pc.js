import Image from './main-img/pc/background.jpg';

function Pc() {
    return(
        <>
        <div class="pc-background d-flex justify-content-center flex-column align-items-center">
        <div data-aos="fade-up">
            <div class="header">
                <img src={Image} width="100%" height="100%"></img>
            </div>
        </div>

        <div class="pc-filter d-flex justify-content-around align-items-center mt-5 mb-5">
            <button id="lowPc" class="btn btn-danger">Low Price$</button>
            <button id="highPc" class="btn btn-danger">High Price$</button>
            <input id="pc_search" class="text-center" type="text" placeholder="search"></input>
        </div>

        <div class="pc-content p-3">
            <div id="pc" class="pc-row p-5 row">
                
            </div>
        </div>

    </div>
        </>
    )
}

export default Pc;