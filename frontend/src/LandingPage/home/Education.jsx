import React from 'react'
function Education() {
    return (
        <div className='container p-3 p-md-5 mt-3 mt-md-5'>
            <div className='row align-items-center g-4'>

                <div className='col-12 col-md-6 text-center'>
                    <div style={{ marginRight: "0" }}>
                        <img
                            src="Media/Images/education.svg"
                            alt="Free and open market education"
                            className="img-fluid"
                            style={{ maxWidth: "400px" }}
                        />
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <div
                        className="text-center text-md-start"
                        style={{
                            marginTop: "0",
                            padding: "10px",
                            marginLeft: "0",
                        }}
                    >
                        <h3 style={{ marginBottom: "15px", fontSize: "clamp(20px, 4vw, 28px)" }}>
                            Free and open market education
                        </h3>

                        <p style={{ opacity: "0.8", marginBottom: "20px" }}>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>

                        <div style={{ marginBottom: "20px" }}>
                            <a href="">Varsity <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div>
                            <p style={{ opacity: "0.8", marginBottom: "20px" }}>
                                TradingQ&A, the most active trading and investment community in India for all your market related queries.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <a href="">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education;