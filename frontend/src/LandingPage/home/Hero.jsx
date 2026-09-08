import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container p-3 p-md-4">
      <div className="row text-center">

        <img
          src="/Media/Images/homeHero.png"
          alt="Invest in everything"
          className="mb-4 mb-md-5 img-fluid mx-auto"
          style={{ maxWidth: "700px" }}
        />

        <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)" }}>
          Invest in everything
        </h1>

        <p className="px-2 px-md-0">
          Online platform to invest in stocks, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>

        <button
          className="btn btn-primary btn-lg mt-4 mb-4"
          style={{ width: "min(260px, 80%)", margin: "0 auto" }}
          onClick={() => {
            navigate("/Signup");
          }}
        >
          Sign up for free
        </button>

      </div>
    </div>
  );
}

export default Hero;