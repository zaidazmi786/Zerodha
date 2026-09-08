import React from "react";

function Hero() {
  return (
    <>
      {/* Technology Section */}
      <div className="container py-4 py-md-5 mt-3 mt-md-5 px-3">

        <div className="row justify-content-center">
          <div className="col-12 col-md-8">

            <h2
              className="text-center text-md-start"
              style={{
                fontSize: "clamp(20px, 4vw, 26px)",
                lineHeight: "1.4",
                fontWeight: "500",
              }}
            >
              We pioneered the discount broking model in India.
              <br className="d-none d-md-block" />
              {" "}Now, we are breaking ground with our technology.
            </h2>

          </div>
        </div>

        <hr className="mt-4 mt-md-5" />

      </div>

      {/* About Content */}
      <div className="container py-4 py-md-5 mt-3 mt-md-5 px-3">

        <div className="row g-4 g-md-3">

          {/* Left Column */}
          <div className="col-12 col-md-6">

            <p>
              We kick-started operations on the 15th of August, 2010
              with the goal of breaking all barriers that traders and
              investors face in India in terms of cost, support, and
              technology. We named the company Zerodha, a combination
              of Zero and "Rodha", the Sanskrit word for barrier.
            </p>

            <p>
              Today, our disruptive pricing models and in-house
              technology have made us the biggest stock broker in
              India.
            </p>

            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>

          </div>


          {/* Right Column */}
          <div className="col-12 col-md-6">

            <p>
              In addition, we run a number of popular open online
              educational and community initiatives to empower retail
              traders and investors.
            </p>

            <p>
              <a href="#" className="text-primary">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several
              fintech startups with the goal of growing the Indian
              capital markets.
            </p>

            <p>
              And yet, we are always up to something new every day.
              Catch up on the latest updates on our{" "}
              <a href="#" className="text-primary">
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="#" className="text-primary">
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a href="#" className="text-primary">
                philosophies
              </a>
              .
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Hero;