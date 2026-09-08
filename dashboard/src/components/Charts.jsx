import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChartComponent from "./BarChartComponent";
import DoughnutChartComponent from "./DoughnutChartComponent";

const Charts = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [allPositions, setAllPositions] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

 useEffect(() => {
  axios.get("https://backend-y0wn.onrender.com/allHoldings").then((res) => {
    setAllHoldings(res.data);
  });
  axios.get("https://backend-y0wn.onrender.com/allPosition").then((res) => {
    setAllPositions(res.data);
  });
  axios.get("https://backend-y0wn.onrender.com/allOrders").then((res) => {
    setAllOrders(res.data);
  });
}, []);

  // ---- Holdings data ----
  const holdingsLabels = allHoldings.map((stock) => stock.name);
  const holdingsValues = allHoldings.map((stock) => stock.price * stock.qty);

  // ---- Positions data ----
  const profitCount = allPositions.filter((stock) => {
    const curValue = stock.price * stock.qty;
    return curValue - stock.avg * stock.qty >= 0;
  }).length;
  const lossCount = allPositions.length - profitCount;

  const positionsLabels = allPositions.map((stock) => stock.name);
  const positionsValues = allPositions.map(
    (stock) => stock.price * stock.qty - stock.avg * stock.qty
  );

  // ---- Orders data ----
  const buyCount = allOrders.filter((order) => order.mode === "BUY").length;
  const sellCount = allOrders.filter((order) => order.mode === "SELL").length;

  const ordersLabels = allOrders.map((order) => order.name);
  const ordersValues = allOrders.map((order) => order.qty * order.price);

  return (
    <div>
      <h3 className="title mb-4">All Charts</h3>

      {/* Holdings Section */}
      {allHoldings.length > 0 && (
        <div className="mb-5">
          <h4 className="mb-3">Holdings Overview</h4>
          <BarChartComponent
            labels={holdingsLabels}
            values={holdingsValues}
            label="Current Value (₹)"
            barColor="#ec2276"
          />
        </div>
      )}

      {/* Positions Section */}
      {allPositions.length > 0 && (
        <>
          <div className="mb-5">
            <h4 className="mb-3">Profit vs Loss Positions</h4>
            <DoughnutChartComponent
              labels={["Profit", "Loss"]}
              values={[profitCount, lossCount]}
              colors={["#4caf50", "#eb5b3c"]}
            />
          </div>

          <div className="mb-5">
            <h4 className="mb-3">P&L by Instrument</h4>
            <BarChartComponent
              labels={positionsLabels}
              values={positionsValues}
              label="P&L (₹)"
              barColor="#d510aa"
            />
          </div>
        </>
      )}

      {/* Orders Section */}
      {allOrders.length > 0 && (
        <>
          <div className="mb-5">
            <h4 className="mb-3">Buy vs Sell</h4>
            <DoughnutChartComponent
              labels={["Buy", "Sell"]}
              values={[buyCount, sellCount]}
              colors={["#4caf50", "#eb5b3c"]}
            />
          </div>

          <div className="mb-5">
            <h4 className="mb-3">Order Value by Instrument</h4>
            <BarChartComponent
              labels={ordersLabels}
              values={ordersValues}
              label="Order Value (₹)"
              barColor="#ff9800"
            />
          </div>
        </>
      )}

      {allHoldings.length === 0 && allPositions.length === 0 && allOrders.length === 0 && (
        <p className="text-muted">No data available to show charts yet.</p>
      )}
    </div>
  );
};

export default Charts;