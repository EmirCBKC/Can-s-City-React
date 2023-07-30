function Contact() {
    return (
        <>
            <div class="contact-us-background d-flex justify-content-center flex-column align-items-center">
                <div class="contact-row justify-content-center p-5 row">
                    <div class="contact-info d-flex justify-content-center col-xxl-6 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="contact-form d-flex flex-column justify-content-center align-items-center">
                            <div class="input d-flex flex-column justify-content-center align-items-center">
                                <div class="one d-flex align-items-center justify-content-end">
                                    <label class="me-3" for="">E-mail: </label>
                                    <input id="email" type="email" placeholder="example@info.com"></input>
                                </div>
                                <div class="two d-flex align-items-center justify-content-end">
                                    <label class="me-3" for="">Phone: </label>
                                    <input id="phone" type="number" placeholder="xxxx.xxx.xx.xx"></input>
                                </div>
                                <div class="three d-flex justify-content-end">
                                    <label class="me-3" for="">Description: </label>
                                    <textarea id="desc" cols="30" rows="10"></textarea>
                                </div>
                                <button id="submit" class="btn mt-5">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div class="contact-map mt-5 col-xxl-6 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="contact-map-iframe d-flex flex-column justify-content-center align-items-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.46260695797!2d-122.20590511644829!3d37.40296192903705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilikon%20Vadisi%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1690053560206!5m2!1str!2str"
                                width="100%" height="100%" style={{border:"2px solid #00ffff"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;