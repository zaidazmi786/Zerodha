import React from 'react'
function Pricing() {
    return (
        <div className='container mt-3 mt-md-5 fs-6 px-3'>
            <div className='row g-4'>

                <div className='col-12 col-lg-5'>
                    <div className="text-center text-lg-start">
                        <h1 style={{ fontSize: "clamp(26px, 5vw, 40px)" }}>Unbeatable pricing</h1>
                        <p>
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <div>
                            <a href="">See pricing </a>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-2 d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                    <img className='mb-2 mb-lg-0 ms-lg-5' style={{ width: "48px" }} src="/Media/Images/pricing0.svg" alt="" />
                    <p className="mb-0 ms-lg-2 me-lg-1">Free account <br /> opening</p>
                </div>

                <div className="col-6 col-lg-2 d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                    <img className='mb-2 mb-lg-0 ms-lg-5' style={{ width: "48px" }} src="/Media/Images/pricing0.svg" alt="" />
                    <p className="mb-0 ms-lg-2 me-lg-1">Free equity delivery and direct mutual funds</p>
                </div>

                <div className="col-6 col-lg-2 d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                    <img className='mb-2 mb-lg-0 ms-lg-5' style={{ width: "48px" }} src="/Media/Images/intradayTrades.svg" alt="" />
                    <p className="mb-0 ms-lg-2 me-lg-1">Intraday and F&O</p>
                </div>

            </div>
        </div>
    );
}

export default Pricing;