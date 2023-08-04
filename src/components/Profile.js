function Profile() {
    const getUser = localStorage.getItem("User Data")
    const user = JSON.parse(getUser);
    return (
        <>
            <div className="profile-background d-flex justify-content-center flex-column align-items-center">
                <div className="profile-content d-flex flex-column align-items-center">
                    <div key={user.id} className="profile-img-row p-2 mb-5 row justify-content-center">
                        <div className="profile-img-col d-flex justify-content-center mt-4 mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="profile-img" style={{
                                backgroundImage: `url(${user.img})`,
                                backgroundPosition: "top",
                                backgroundSize: "cover",
                                width: "73%",
                                height: "18rem",
                                backgroundColor: "#04112996",
                                borderRadius: "50%",
                                border: "2px solid #00ffff",
                                boxShadow: "0px 0px 10px #00ffff"
                            }}>
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-row mt-5 justify-content-center row">
                        <div className="profile-info-col mt-5 d-flex justify-content-center col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="profile-info mt-5">
                                <h2>Name: {user.name}</h2>
                                <h2>Surname: {user.surname}</h2>
                                <h2>Username: {user.username}</h2>
                                <h2>Age: {user.age}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;