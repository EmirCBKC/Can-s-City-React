function About() {
    return (
        <>
            <div className="about-us-background d-flex justify-content-center flex-column align-items-center">
                <div className="about-us-content d-flex flex-column align-items-center">
                    <video className="header-us" width="100%" autoPlay muted loop>
                        <source src="/main-videous/cans-city-about-us.mp4"></source>
                    </video>

                    <div className="about-us-row justify-content-center mt-5 p-5 row">
                        <div className="about-left-png d-flex justify-content-center mt-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <img src="/main-img/about/left.png" alt=""></img>
                        </div>
                        <div className="about-us-info d-flex justify-content-center mt-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="info-us">
                                <h1 className="text-center">ABOUT US</h1>
                                <p className="text-center mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti, fuga maiores quidem quisquam cum consectetur consequuntur aliquid eius illum debitis, ad vero atque provident nobis dolorem! Nesciunt, mollitia fuga.
                                    Quam, perferendis nobis praesentium, accusantium odit voluptatem consequatur aliquid aspernatur blanditiis quod doloremque, veniam reprehenderit aliquam quisquam asperiores earum fuga ad. Laboriosam laudantium officia explicabo eos et eius repellat! Eius!
                                    Doloremque rerum eveniet repellat pariatur corporis, commodi consequuntur exercitationem quidem cumque minima illum temporibus? Natus possimus aspernatur quidem ut illo mollitia, omnis recusandae quasi minima est, sint eum consequuntur animi.
                                    Nisi tenetur laboriosam quidem odit iure ad doloremque exercitationem consectetur, minus veritatis, asperiores alias natus, neque mollitia ea nam facilis numquam aspernatur voluptatibus eligendi. Debitis corporis nemo distinctio eius voluptatem.
                                    Pariatur et fuga nam sint optio veritatis fugit commodi ipsa non quasi a totam atque ipsam dolores corrupti sed quis, earum consectetur ex, nemo qui unde nostrum tenetur ad? Aliquid.</p>
                            </div>
                        </div>
                        <div className="about-right-png d-flex justify-content-center mt-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <img src="/main-img/about/right.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;