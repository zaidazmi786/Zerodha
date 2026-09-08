import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Menu = () => {
  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // frontend app ka port yahan daalo (jahan Home/Login page hai)
    window.location.href = "http://localhost:5173/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid px-3 ">
        

        <img style={{ width: "30px",marginLeft:"40%" }} src="./public/logo.png" alt="" />

        {/* Mobile Toggle - ms-auto se right side pe shift hoga */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dashboardNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu + Profile */}
        <div className="collapse navbar-collapse justify-content-end" id="dashboardNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/orders">
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/holdings">
                Holdings
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/positions">
                Positions
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/funds">
                Funds
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/charts">
                Charts
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-1 text-dark" to="/apps">
                Apps
              </Link>
            </li>

            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <div
                className="profile d-flex align-items-center"
                onClick={handleProfileClick}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: "28px", height: "28px", fontSize: "12px" }}
                >
                  Z
                </div>
                <p className="username mb-0 small">USERID</p>
              </div>
            </li>

            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;