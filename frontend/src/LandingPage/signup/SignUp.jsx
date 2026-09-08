import React, { useState } from "react";
import axios from "axios";
import "./signup.css"

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = () => {
  if (!username || !password) {
    setError("Please enter both username and password");
    return;
  }

  setError("");
  setIsSubmitting(true);

  axios
    .post("https://backend-y0wn.onrender.com/signup", { username, password })
    .then((res) => {
      setIsSubmitting(false);
      window.location.href = `https://dashboard-xafm.onrender.com/dashboard?token=${res.data.token}&username=${res.data.username}`;
    })
    .catch((err) => {
      setIsSubmitting(false);
      setError(err.response?.data?.error || "Signup failed");
    });
};
  return (
    <>
      {/* Signup Section */}
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6 text-center">
            <img
              src="/Media/Images/signup.png"
              alt="Signup"
              className="img-fluid"
              style={{ width: "85%" }}
            />
          </div>

          {/* Right Signup Form */}
          <div className="col-md-5 offset-md-1">

            <h1 className="mb-3">Signup now</h1>

            <p
              className="text-muted"
              style={{ fontSize: "18px" }}
            >
              Or track your existing application
            </p>

            <div className="mt-4">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ height: "50px", fontSize: "16px" }}
              />

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ height: "50px", fontSize: "16px" }}
              />
            </div>

            {error && (
              <p className="text-danger mt-2" style={{ fontSize: "14px" }}>
                {error}
              </p>
            )}

            <button
              className="btn btn-primary mt-4"
              onClick={handleSignup}
              disabled={isSubmitting}
              style={{
                width: "260px",
                height: "54px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>

            <p
              className="mt-4 text-muted"
              style={{ fontSize: "13px" }}
            >
              By proceeding, you agree to the{" "}
              <a href="#" className="text-primary">
                Zerodha terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-primary">
                privacy policy
              </a>
            </p>

            <hr />

            <p style={{ fontSize: "14px" }}>
              Looking to open NRI account?{" "}
              <a href="#" className="text-primary">
                Click here
              </a>
            </p>

          </div>
        </div>
      </div>


      {/* Investment Options Section */}
      <div className="container py-5">

        <h2 className="text-center mb-5">
          Investment options with Zerodha demat account
        </h2>

        <div className="row">

          {/* Stocks */}
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">

              <div className="col-4 text-center">
                <img
                  src="/Media/Images/stocks-acop.svg"
                  alt="Stocks"
                  className="img-fluid"
                />
              </div>

              <div className="col-8">
                <h4>Stocks</h4>

                <p className="text-muted">
                  Invest in all exchange-listed
                  <br />
                  securities
                </p>
              </div>

            </div>
          </div>


          {/* Mutual Funds */}
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">

              <div className="col-4 text-center">
                <img
                  src="/Media/Images/mf-acop.svg"
                  alt="Mutual Funds"
                  className="img-fluid"
                />
              </div>

              <div className="col-8">
                <h4>Mutual funds</h4>

                <p className="text-muted">
                  Invest in commission-free direct
                  <br />
                  mutual funds
                </p>
              </div>

            </div>
          </div>


          {/* IPO */}
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">

              <div className="col-4 text-center">
                <img
                  src="/Media/Images/ipo-acop.svg"
                  alt="IPO"
                  className="img-fluid"
                />
              </div>

              <div className="col-8">
                <h4>IPO</h4>

                <p className="text-muted">
                  Apply to the latest IPOs instantly
                  <br />
                  via UPI
                </p>
              </div>

            </div>
          </div>


          {/* Futures & Options */}
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">

              <div className="col-4 text-center">
                <img
                  src="/Media/Images/fo-acop.svg"
                  alt="Futures and Options"
                  className="img-fluid"
                />
              </div>

              <div className="col-8">
                <h4>Futures & options</h4>

                <p className="text-muted">
                  Hedge and mitigate market risk
                  <br />
                  through simplified F&O trading
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* Explore Button */}
        <div className="text-center mt-2">

          <button
            className="btn btn-primary btn-lg"
            style={{
              width: "247px",
              fontWeight: "600",
            }}
          >
            Explore Investments
          </button>

        </div>

        {/* Steps Section */}
<div
  className="container-fluid py-5 mt-5"
  style={{ backgroundColor: "#fbfbfb" }}
>
  <div className="container">

    <h2 className="text-center mb-5">
      Steps to open a demat account with Zerodha
    </h2>

    <div className="row align-items-center">

      {/* Left Image */}
      <div className="col-md-6 text-center">
        <img
          src="/Media/Images/steps-acop.svg"
          alt="Steps to open account"
          className="img-fluid"
          style={{ width: "80%" }}
        />
      </div>

      {/* Right Steps */}
      <div className="col-md-5 offset-md-1">

        {/* Step 1 */}
        <div className="d-flex align-items-center border-bottom py-4">
          <span
            className="rounded-circle border d-flex align-items-center justify-content-center me-3"
            style={{
              width: "35px",
              height: "35px",
              minWidth: "35px",
              fontSize: "14px",
            }}
          >
            01
          </span>

          <h4 className="mb-0">
            Enter the requested details
          </h4>
        </div>

        {/* Step 2 */}
        <div className="d-flex align-items-center border-bottom py-4">
          <span
            className="rounded-circle border d-flex align-items-center justify-content-center me-3"
            style={{
              width: "35px",
              height: "35px",
              minWidth: "35px",
              fontSize: "14px",
            }}
          >
            02
          </span>

          <h4 className="mb-0">
            Complete e-sign & verification
          </h4>
        </div>

        {/* Step 3 */}
        <div className="d-flex align-items-center py-4">
          <span
            className="rounded-circle border d-flex align-items-center justify-content-center me-3"
            style={{
              width: "35px",
              height: "35px",
              minWidth: "35px",
              fontSize: "14px",
            }}
          >
            03
          </span>

          <h4 className="mb-0">
            Start investing!
          </h4>
        </div>

      </div>
    </div>
  </div>
</div>

{/* Benefits Section */}
<div className="container py-5 mt-5">

  <div className="row align-items-center">

    {/* Left Side */}
    <div className="col-md-6 text-center">

      <img
        src="/Media/Images/acop-benefits.svg"
        alt="Benefits"
        className="img-fluid mb-5"
        style={{ width: "65%" }}
      />

      <h2>
        Benefits of opening a Zerodha demat account
      </h2>

    </div>


    {/* Right Side */}
    <div className="col-md-6">

      {/* Benefit 1 */}
      <div className="mb-5">

        <h3>
          Unbeatable pricing
        </h3>

        <p className="text-muted fs-5">
          Zero charges for equity & mutual fund investments.
          Flat ₹20 fees for intraday and F&O trades.
        </p>

      </div>


      {/* Benefit 2 */}
      <div className="mb-5">

        <h3>
          Best investing experience
        </h3>

        <p className="text-muted fs-5">
          Simple and intuitive trading platform with an
          easy-to-understand user interface.
        </p>

      </div>


      {/* Benefit 3 */}
      <div className="mb-5">

        <h3>
          No spam or gimmicks
        </h3>

        <p className="text-muted fs-5">
          Committed to transparency — no gimmicks, spam,
          "gamification", or intrusive push notifications.
        </p>

      </div>


      {/* Benefit 4 */}
      <div className="mb-4">

        <h3>
          The Zerodha universe
        </h3>

        <p className="text-muted fs-5">
          More than just an app — gain free access to the
          entire ecosystem of our partner products.
        </p>

      </div>

    </div>

  </div>

</div>

{/* Account Types Section */}
<div
  className="container py-5 mt-5"
  style={{ marginBottom: "50px" }}
>
  <h2 className="text-center mb-5">
    Explore different account types
  </h2>

  <div className="row g-5">

    {/* Individual Account */}
    <div className="col-md-4">
      <div
        className="border rounded p-4"
        style={{ minHeight: "168px" }}
      >
        <div className="d-flex align-items-center">

          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#f0f6ff",
              color: "#387ed1",
              fontSize: "20px",
            }}
          >
            <i className="fa-regular fa-user"></i>
          </div>

          <h4 className="mb-0">
            Individual Account
          </h4>

        </div>

        <p className="mt-4 ms-1 text-muted">
          Invest in equity, mutual funds and
          <br />
          derivatives
        </p>
      </div>
    </div>


    {/* HUF Account */}
    <div className="col-md-4">
      <div
        className="border rounded p-4"
        style={{ minHeight: "168px" }}
      >
        <div className="d-flex align-items-center">

          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#f0f6ff",
              color: "#387ed1",
              fontSize: "20px",
            }}
          >
            <i className="fa-solid fa-users"></i>
          </div>

          <h4 className="mb-0">
            HUF Account
          </h4>

        </div>

        <p className="mt-4 ms-1 text-muted">
          Make tax-efficient investments for
          <br />
          your family
        </p>
      </div>
    </div>


    {/* NRI Account */}
    <div className="col-md-4">
      <div
        className="border rounded p-4"
        style={{ minHeight: "168px" }}
      >
        <div className="d-flex align-items-center">

          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#f0f6ff",
              color: "#387ed1",
              fontSize: "20px",
            }}
          >
            <i className="fa-solid fa-globe"></i>
          </div>

          <h4 className="mb-0">
            NRI Account
          </h4>

        </div>

        <p className="mt-4 ms-1 text-muted">
          Invest in equity, mutual funds,
          <br />
          debentures, and more
        </p>
      </div>
    </div>


    {/* Minor Account */}
    <div className="col-md-4">
      <div
        className="border rounded p-4"
        style={{ minHeight: "168px" }}
      >
        <div className="d-flex align-items-center">

          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#f0f6ff",
              color: "#387ed1",
              fontSize: "20px",
            }}
          >
            <i className="fa-regular fa-face-smile"></i>
          </div>

          <h4 className="mb-0">
            Minor Account
          </h4>

        </div>

        <p className="mt-4 ms-1 text-muted">
          Teach your little ones about money
          <br />
          & invest for their future with them
        </p>
      </div>
    </div>


    {/* Corporate Account */}
    <div className="col-md-4">
      <div
        className="border rounded p-4"
        style={{ minHeight: "168px" }}
      >
        <div className="d-flex align-items-center">

          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#f0f6ff",
              color: "#387ed1",
              fontSize: "20px",
            }}
          >
            <i className="fa-regular fa-building"></i>
          </div>

          <h4 className="mb-0">
            Corporate / LLP / Partnership
          </h4>

        </div>

        <p className="mt-4 ms-1 text-muted">
          Manage your business surplus and
          <br />
          investments easily
        </p>
      </div>
    </div>

  </div>
</div>

{/* FAQ Section */}
<div className="container py-5 mt-5">

  <h2 className="mb-5">
    FAQs
  </h2>

  <div className="faq-list">

    {/* FAQ 1 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>What is a Zerodha account</span>
        <span>⌄</span>
      </div>
    </div>

    {/* FAQ 2 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>
          What documents are required to open a demat account?
        </span>
        <span>⌄</span>
      </div>
    </div>

    {/* FAQ 3 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>Is Zerodha account opening free?</span>
        <span>⌄</span>
      </div>
    </div>

    {/* FAQ 4 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>
          Are there any AMC (Account Maintenance Charges) for a demat account?
        </span>
        <span>⌄</span>
      </div>
    </div>

    {/* FAQ 5 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>
          Can I open a demat account without a bank account?
        </span>
        <span>⌄</span>
      </div>
    </div>

    {/* FAQ 6 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>
          What is a Basic Services Demat Account (BSDA)?
        </span>
        <span>⌄</span>
      </div>
    </div>

    {/* FAQ 7 */}
    <div className="faq-item">
      <div className="faq-question">
        <span>
          Can I open a demat and trading account using the mobile app?
        </span>
        <span>⌄</span>
      </div>
    </div>

  </div>

</div>

      </div>
     
    </>
  );
}

export default SignUp;