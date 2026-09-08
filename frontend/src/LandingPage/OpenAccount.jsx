import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className='container p-3 p-md-4'>
      <div className='row text-center'>

        <h1 style={{ fontSize: "clamp(22px, 5vw, 30px)", opacity: "0.8", marginBottom: "20px" }}>
          Open a Zerodha account
        </h1>

        <p style={{ fontSize: "clamp(15px, 3vw, 20px)", opacity: "0.8" }} className="px-2 px-md-0">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
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

export default OpenAccount;