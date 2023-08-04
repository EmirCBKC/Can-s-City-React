function SignUp() {
    return (
        <>
            <div className="signup-background d-flex justify-content-center flex-column align-items-center">
                <div className="signup-content d-flex flex-column align-items-center">
                    <h1 className="text-center mt-5">Welcome, we will be happy to see you among us.</h1>
                    <div className="signup-row row mt-5 justify-content-center">
                        <div className="signup-col d-flex flex-column align-items-end col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="signup-name mt-1 mb-1 d-flex">
                                <label >Name:</label>
                                <input id="u_name" type="text"></input>
                            </div>
                            <div className="signup-surname mt-1 mb-1 d-flex">
                                <label >Surname:</label>
                                <input id="u_surname" type="text"></input>
                            </div>
                            <div className="signup-username mt-1 mb-1 d-flex">
                                <label >Username:</label>
                                <input id="u_username" type="text"></input>
                            </div>
                            <div className="signup-password mt-1 mb-1 d-flex">
                                <label >Password:</label>
                                <input id="u_password" type="password"></input>
                            </div>
                            <div className="signup-age mt-1 mb-1 d-flex">
                                <label >Age:</label>
                                <input id="u_age" type="number"></input>
                            </div>
                            <button id="submit" className="mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;