import React from 'react'
function LeftSection() {
    return ( 
        
<div className="container py-5">
  <div className="row align-items-center">

    {/* Left Image */}
    <div className="col-md-7 text-center">
      <img
        src="/Media/Images/kite.png"
        alt="Kite"
        className="img-fluid"
        style={{ width: "85%" }}
      />
    </div>

    {/* Right Content */}
    <div className="col-md-5">

      <h2 className="mb-4">
        Kite
      </h2>

      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.7",
        }}
      >
        Our ultra-fast flagship trading platform with
        streaming market data, advanced charts, an
        elegant UI, and more. Enjoy the Kite
        experience seamlessly on your Android and
        iOS devices.
      </p>

      <div className="mt-4 mb-4">

        <a
          href="#"
          className="text-primary me-5"
          style={{ textDecoration: "none" }}
        >
          Try demo →
        </a>

        <a
          href="#"
          className="text-primary"
          style={{ textDecoration: "none" }}
        >
          Learn more →
        </a>

      </div>


      <div className="d-flex gap-3">

        <img
          src="/Media/Images/googlePlayBadge.svg"
          alt="Google Play"
          style={{ width: "150px" }}
        />

        <img
          src="/Media/Images/appstoreBadge.svg"
          alt="App Store"
          style={{ width: "150px" }}
        />

      </div>

    </div>

  </div>

  
</div>
     );
}



export default LeftSection;