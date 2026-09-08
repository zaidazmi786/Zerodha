import React from "react";

function Hero() {
  return (
    <>
      {/* Products Hero Section */}
      <div className="container py-5">

        <div
          className="text-center"
          style={{
            paddingTop: "40px",
            paddingBottom: "115px",
          }}
        >
          <h1 style={{ fontSize: "30px" }}>
            Zerodha Products
          </h1>

          <p
            style={{
              fontSize: "21px",
              marginTop: "15px",
            }}
          >
            Sleek, modern, and intuitive trading platforms
          </p>

          <p
            style={{
              fontSize: "17px",
              marginTop: "25px",
            }}
          >
            Check out our{" "}
            <a href="#" className="text-primary">
              investment offerings →
            </a>
          </p>
        </div>

        <hr />

      </div>
    </>
  );
}

export default Hero;