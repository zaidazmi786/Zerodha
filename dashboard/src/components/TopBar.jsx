import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container pt-2">
      {/* Indices Row */}
      <div className="indices-container d-flex align-items-center sticky-top px-3">
        <div className="nifty d-flex align-items-center me-4 ">
          <p className="index mb-0  me-2 text-dark">NIFTY 50</p>
          <p className="index-points mb-0 text-danger">{100.2}</p>
        </div>

        <div className="sensex d-flex align-items-center">
          <p className="index mb-0 me-2 text-dark">SENSEX</p>
          <p className="index-points mb-0 text-danger">{100.2}</p>

        </div>

      </div>
      <Menu/>

      <hr className="my-0" />

      {/* Search Row */}



      {/* Menu Row */}

    </div>
  );
};

export default TopBar;