import React from 'react'

function Awards() {
    return (
        <div className='container mt-4 mt-md-5 px-3'>
            <div className='row align-items-center'>

                <div className='col-12 col-md-6 p-3 p-md-5 text-center'>
                    <img
                        src="public/Media/Images/largestBroker.svg"
                        alt="Largest Stock Broker in India"
                        className="img-fluid"
                        style={{ maxWidth: "350px" }}
                    />
                </div>

                <div className='col-12 col-md-6 p-3 p-md-5 mt-0 mt-md-5'>
                    <h1
                        className='mb-3 text-center text-md-start'
                        style={{ fontSize: "clamp(24px, 5vw, 40px)" }}
                    >
                        Largest Stock Broker In India
                    </h1>

                    <p className="text-center text-md-start">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <div className='row mt-4'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures And Options</li>
                                <li>Stock & IPOs</li>
                                <li>Commodity derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Direct Mutual Funds</li>
                                <li>Currensy Derivetives</li>
                                <li>Bond and Govt. Secuirities</li>
                            </ul>
                        </div>
                    </div>

                    <img
                        src="Media/Images/pressLogos.png"
                        alt="Press mentions"
                        className="img-fluid mt-3"
                        style={{ width: "90%" }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Awards;