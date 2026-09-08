import React from 'react'

function Stats() {
    return (
        <div className='container mt-3 mt-md-5 p-3 p-md-4'>
            <div className='row g-4'>

                {/* Left side */}
                <div className='col-12 col-lg-6'>
                    <div className='detail text-center text-lg-start'>
                        <h2 className='mb-4 mb-md-5' style={{ fontSize: "clamp(24px, 5vw, 32px)" }}>
                            Trust with confidence
                        </h2>

                        <div className='detail1 mb-4'>
                            <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)" }}>Customer-first always</h3>
                            <p>
                                That's why 1.6+ crore customers trust Zerodha with
                                ~ ₹6 lakh crores of equity investments, making us
                                India's largest broker; contributing to 15% of daily
                                retail exchange volumes in India.
                            </p>
                        </div>

                        <div className='detail2 mb-4'>
                            <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)" }}>No spam or gimmicks</h3>
                            <p>
                                No gimmicks, spam, "gamification", or annoying push
                                notifications. High quality apps that you use at
                                your pace, the way you like. Our philosophies.
                            </p>
                        </div>

                        <div className='detail3 mb-4'>
                            <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)" }}>No spam or gimmicks</h3>
                            <p>
                                No gimmicks, spam, "gamification", or annoying push
                                notifications. High quality apps that you use at
                                your pace, the way you like. Our philosophies.
                            </p>
                        </div>

                        <div className='detail4 mb-4'>
                            <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)" }}>No spam or gimmicks</h3>
                            <p>
                                No gimmicks, spam, "gamification", or annoying push
                                notifications. High quality apps that you use at
                                your pace, the way you like. Our philosophies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className='col-12 col-lg-6'>
                    <img
                        src="/Media/Images/ecosystem.png"
                        alt="Zerodha ecosystem"
                        className="img-fluid"
                        style={{ width: "100%" }}
                    />
                    <div className='text-center mt-3 d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-0'>
                        <a href="">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a className='ms-sm-5' href="">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>


            <div
                style={{
                    backgroundColor: "#ecf8fc",
                    width: "100vw",
                    marginLeft: "calc(50% - 50vw)",
                    marginTop: "40px",
                }}
                className="mt-md-5"
            >
                <div className="container py-4 px-3">
                    <div className="row align-items-center g-3 text-center text-md-start">

                        <div className="col-6 col-md-3">
                            <img
                                src="/Media/Images/kc-logo-landing.svg"
                                alt="Kite Connect"
                                className="img-fluid"
                                style={{ maxWidth: "160px" }}
                            />
                        </div>

                        <div className="col-12 col-md-7 order-3 order-md-2">
                            <p style={{ fontSize: "15px" }}>
                                Need more? Build your own trading and investing experience
                                with Kite Connect, simple HTTP APIs to place orders,
                                stream market data, manage your account, and more.

                                <a href="#">
                                    {" "}Explore <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </p>
                        </div>

                        <div className="col-6 col-md-2 order-2 order-md-3">
                            <img
                                src="/Media/Images/kc-banner-image.svg"
                                alt=""
                                className="img-fluid"
                                style={{ width: "100%" }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Stats