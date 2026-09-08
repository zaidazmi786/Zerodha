import React from "react";

function Team() {
  return (
    <div className="container py-4 py-md-5 px-3">

      {/* Heading */}
      <h2 className="text-center mb-4 mb-md-5" style={{ fontSize: "clamp(24px, 5vw, 32px)" }}>
        People
      </h2>

      <div className="row align-items-center g-4">

        {/* Left Side - Image */}
        <div className="col-12 col-md-5 text-center">

          <img
            src="/Media/Images/zaid.png"
            alt="Founder"
            className="rounded-circle img-fluid"
            style={{
              width: "295px",
              maxWidth: "70vw",
              height: "295px",
              maxHeight: "70vw",
              objectFit: "cover",
            }}
          />

          <h4 className="mt-4">
            Abu_Zaid
          </h4>

          <p className="text-muted">
            Founder, CEO
          </p>

        </div>


        {/* Right Side - Content */}
        <div className="col-12 col-md-6 offset-md-1 text-center text-md-start">

          <p>
            Zaid bootstrapped and founded Zerodha in 2010 to overcome
            the hurdles he faced during his decade long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian
            broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
            Playing basketball is his zen.
          </p>

          <p>
            Connect on{" "}
            <a href="/homepage" className="text-primary">
              Homepage
            </a>
            {" / "}
            <a href="#" className="text-primary">
              TradingQnA
            </a>
            {" / "}
            <a href="/linkedin.com/in/abu-zaid-5a29a0282" className="text-primary">
            Linkdin
            </a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Team;