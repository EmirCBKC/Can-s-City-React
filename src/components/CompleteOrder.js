function CompleteOrder() {
    return (
        <>
            <div className="complete-order-background d-flex justify-content-center flex-column align-items-center">
                <div className="complete-order-content d-flex flex-column align-items-center p-5 mt-5">

                </div>
                <div className="pay d-flex flex-column align-items-center mb-5">
                    <div className="pay-row row justify-content-end">
                        <div className="discount-col d-flex justify-content-center mt-3 mb-3 col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="discount d-flex align-items-center justify-content-center">
                                <label className="me-2">Enter Discount Code:</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="pay-col d-flex justify-content-center mt-3 mb-3 col-xxl-2 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="go-pay d-flex align-items-center justify-content-center">
                                <button className="pay-button">Go to pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteOrder;