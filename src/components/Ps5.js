import Image from './main-img/ps5/background.jpg';

function Ps5() {
    return (
        <>
            <div class="ps5-background d-flex justify-content-center flex-column align-items-center">
                <div data-aos="fade-up">
                    <div class="header">
                        <img src={Image} width="100%" height="100%"></img>
                    </div>
                </div>

                <div class="ps5-filter d-flex justify-content-around align-items-center mt-5 mb-5">
                    <button id="lowPs5" class="btn btn-danger">Low Price$</button>
                    <button id="highPs5" class="btn btn-danger">High Price$</button>
                    <input id="ps5_search" class="text-center" type="text" placeholder="search"></input>
                </div>

                <div class="ps5-content p-3">
                    <div id="ps5" class="ps5-row p-5 row">

                    </div>
                </div>

            </div>

        </>
    )
}

export default Ps5;