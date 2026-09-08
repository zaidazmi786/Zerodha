import React, { useState, useContext } from "react";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import DoughnutChartComponent from "./DoughnutChartComponent";
import "./WatchList.css";

const WatchList = () => {
  // Gainers vs Losers count nikalna doughnut chart ke liye
  const gainers = watchlist.filter((stock) => !stock.isDown).length;
  const losers = watchlist.filter((stock) => stock.isDown).length;

  return (
    <div className="watchlist-container">
      <div className="search-container d-flex align-items-center justify-content-between px-2 py-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search form-control form-control-sm border-0 shadow-none"
        />
        <span className="counts text-muted small ms-2" style={{ whiteSpace: "nowrap" }}>
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="list list-unstyled mb-0">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* Gainers vs Losers doughnut chart */}
      <div className="px-3 py-3">
        <h6 className="mb-2 text-muted">Gainers vs Losers</h6>
        <DoughnutChartComponent
          labels={["Gainers", "Losers"]}
          values={[gainers, losers]}
          colors={["#4caf50", "#eb5b3c"]}
        />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);
  const generalContext = useContext(GeneralContext);

  const handleMouseEnter = () => setShowWatchListActions(true);
  const handleMouseLeave = () => setShowWatchListActions(false);

  return (
    <li
      className="d-flex flex-column px-3 py-2 border-bottom"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <p className={`mb-0 ${stock.isDown ? "text-danger" : "text-success"}`}>
          {stock.name}
        </p>

        <div className="d-flex align-items-center gap-1">
          <span className={`small ${stock.isDown ? "text-danger" : "text-success"}`}>
            {stock.percent}%
          </span>

          <span className={stock.isDown ? "text-danger" : "text-success"} style={{ fontSize: "14px" }}>
            {stock.isDown ? "▼" : "▲"}
          </span>

          <span className={stock.isDown ? "text-danger" : "text-success"}>
            {stock.price}
          </span>
        </div>
      </div>

      {showWatchListActions && (
        <div className="d-flex gap-2 mt-2">
          <button className="buy-link" style={{backgroundColor:"green", color:"white",borderRadius:"5px"}} onClick={() => generalContext.openBuyWindow(stock.name)}>Buy</button>
          <button className="sell-link" style={{backgroundColor:"red", color:"white",borderRadius:"5px"}} onClick={() => generalContext.openSellWindow(stock.name)}>Sell</button>
          <button className="btn btn-sm btn-outline-secondary">Chart</button>
          <button className="btn btn-sm btn-outline-secondary">more</button>
        </div>
      )}
    </li>
  );
};