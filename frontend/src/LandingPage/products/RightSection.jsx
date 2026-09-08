import React from 'react'
function RightSection() {
    return ( 
      /* Console Section */
<div className="container py-5 mt-2">
  <div className="row align-items-center">

    {/* Left Content */}
    <div className="col-md-5">

      <h2 className="mb-4">
        Console
      </h2>

      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.7",
        }}
      >
        The central dashboard for your Zerodha
        account. Gain insights into your trades and
        investments with in-depth reports and
        visualisations.
      </p>

      <a
        href="#"
        className="text-primary"
        style={{
          textDecoration: "none",
          fontSize: "17px",
        }}
      >
        Learn more&nbsp; →
      </a>

    </div>


    {/* Right Image */}
    <div className="col-md-7 text-center">

      <img
        src="/Media/Images/products-console.png"
        alt="Console"
        className="img-fluid"
        style={{ width: "90%" }}
      />

    </div>

  </div>
</div>
     );
}

export default RightSection;