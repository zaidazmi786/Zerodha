import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container py-2" style={{ minHeight: "50px" }}>

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "140px", maxWidth: "30vw" }}
            src="Media/Images/logo.svg"
            alt="Zerodha"
            className="logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto align-items-lg-center">

            <li className="nav-item ms-lg-4">
              <Link className="nav-link active" to="/Signup">
                Signup
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link className="nav-link active" to="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link className="nav-link active" to="/Product">
                Products
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link className="nav-link active" to="/Pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link className="nav-link active" to="/Support">
                Support
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;