import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import CarouselImage1 from './main-img/home/carousel-1.jpg';
import CarouselImage2 from './main-img/home/carousel-2.jpg';
import CarouselImage3 from './main-img/home/carousel-3.jpg';
import Pc from './main-img/home/pc.png';
import Ps5 from './main-img/home/ps5.png';
import Xbox from './main-img/home/xbox.png';

function Home() {
    return (
        <>
            <div className="home-background d-flex justify-content-center flex-column align-items-center">

                <div data-aos="fade-down">
                    <Carousel>
                        <Carousel.Item>
                            <img src={CarouselImage1} className="d-block w-100"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={CarouselImage2} className="d-block w-100"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={CarouselImage3} className="d-block w-100"></img>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="home-content d-flex justify-content-center align-items-center flex-column p-3 mb-5">

                    <div data-aos="fade-right" data-aos-offset="600" data-aos-easing="ease-in-sine">
                        <div className="home-row mt-5 mb-5 justify-content-around row">

                            <div
                                className="pc-col d-flex align-items-center col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="home-pc">
                                    <img src={Pc} width="100%" height="100%"></img>
                                </div>
                            </div>

                            <div
                                className="pc-text-col d-flex align-items-center col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="home-pc-text d-flex flex-column align-items-center">
                                    <h1>PC</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut perspiciatis incidunt
                                        ducimus. Eius suscipit voluptate qui doloremque distinctio aliquam libero, reiciendis
                                        recusandae aperiam minima, consequatur deserunt nostrum, vel dicta!
                                        Possimus laborum assumenda neque soluta quia quisquam ipsam sit, consequatur doloribus
                                        temporibus tenetur quas totam laboriosam tempore dolorum quae reprehenderit veniam autem
                                        voluptatum. Voluptatibus rem sit fugiat sequi officia velit!</p>
                                    <a href="/pc"><button className="btn">Go games</button></a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="home-row mt-5 justify-content-around align-items-baseline row">

                        <div
                            className="ps5-text-col d-flex align-items-center col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="home-ps5-text d-flex flex-column align-items-center">
                                <h1>Playstation 5</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quam corrupti dolorum
                                    sapiente culpa eaque blanditiis necessitatibus corporis optio, hic libero delectus minus
                                    cumque vitae. Harum non mollitia quas numquam!
                                    Officiis assumenda repellat adipisci atque! Alias repellendus quasi delectus totam
                                    assumenda iure architecto labore tempora placeat pariatur ducimus molestiae eveniet, a
                                    velit! Est vero ea obcaecati ipsam ad placeat soluta?</p>
                                <a href="/ps5"><button className="btn">Go games</button></a>
                            </div>
                        </div>

                        <div
                            className="ps5-col p-5 d-flex align-items-center col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="home-ps5">
                                <img src={Ps5} width="100%" height="100%"></img>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-right" data-aos-offset="600" data-aos-easing="ease-in-sine">
                        <div className="home-row justify-content-around row">

                            <div
                                className="xbox-col d-flex align-items-center col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="home-xbox">
                                    <img src={Xbox} width="100%" height="100%"></img>
                                </div>
                            </div>

                            <div
                                className="xbox-text-col d-flex align-items-center col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="home-xbox-text d-flex flex-column align-items-center">
                                    <h1>Xbox</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consequuntur
                                        praesentium, nobis labore, non quia dolores, explicabo modi est asperiores sapiente
                                        temporibus. Animi quia quasi asperiores alias impedit voluptatem reprehenderit?
                                        Enim, officiis amet! Error ipsa hic ullam obcaecati perferendis quae omnis recusandae
                                        harum repudiandae voluptates exercitationem cum perspiciatis, consectetur deserunt porro
                                        quas velit nulla repellat modi similique architecto assumenda esse.</p>
                                    <a href="/xbox"><button className="btn">Go games</button></a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h1 className="faq"><u>FAQ</u></h1>
                </div>

                <Accordion className='mb-5'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </>
    )
}

export default Home;