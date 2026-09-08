import React from "react";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FBFBFB",
          width: "100%",
        }}
      >
        <hr />

        <div className="container mt-4 px-3">
          <div className="row g-4">

            <div className="col-12 col-lg-4">
              <img
                style={{ width: "160px", maxWidth: "40%" }}
                src="Media/Images/logo.svg"
                alt=""
              />

              <p className="mt-3">
                © 2010 - 2026, Zerodha Broking Ltd. <br />
                All rights reserved.
              </p>

              <div>
                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>

                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>

                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>

              <hr />

              <div>
                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>

                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-square-whatsapp"></i>
                </a>

                <a className="me-4 fs-4" href="">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </div>

              <div className="mt-4 d-flex flex-wrap gap-2">
                <img
                  style={{ maxWidth: "140px", width: "100%" }}
                  src="Media/Images/googlePlayBadge.svg"
                  alt=""
                />

                <img
                  style={{ maxWidth: "140px", width: "100%" }}
                  src="Media/Images/appstoreBadge.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-2" style={{ opacity: "0.7" }}>
              <h3 className="fs-5">Account</h3>
              <p>Open demat account</p>
              <p>Minor demat account</p>
              <p>NRI demat account</p>
              <p>HUF demat account</p>
              <p>Commodity</p>
              <p>Dematerialisation</p>
              <p>Fund transfer</p>
              <p>MTF</p>
            </div>

            <div className="col-6 col-md-3 col-lg-2" style={{ opacity: "0.7" }}>
              <h3 className="fs-5">Support</h3>
              <p>Contact us</p>
              <p>Support portal</p>
              <p>How to file a complaint?</p>
              <p>Status of your complaints</p>
              <p>Bulletin</p>
              <p>Circular</p>
              <p>Z-Connect blog</p>
              <p>Downloads</p>
            </div>

            <div className="col-6 col-md-3 col-lg-2" style={{ opacity: "0.7" }}>
              <h3 className="fs-5">Company</h3>
              <p>About</p>
              <p>Philosophy</p>
              <p>Press & media</p>
              <p>Careers</p>
              <p>Zerodha Cares (CSR)</p>
              <p>Zerodha.tech</p>
              <p>Open source</p>
              <p>Referral program</p>
            </div>

            <div className="col-6 col-md-3 col-lg-2" style={{ opacity: "0.7" }}>
              <h3 className="fs-5">Quick links</h3>
              <p>Upcoming IPOs</p>
              <p>Brokerage charges</p>
              <p>Market holidays</p>
              <p>Economic calendar</p>
              <p>Calculators</p>
              <p>Markets</p>
              <p>Sectors</p>
              <p>Gift Nifty</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;