import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChartComponent from "./BarChartComponent";
import DoughnutChartComponent from "./DoughnutChartComponent";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allPosition").then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    });
  }, []);

  // Doughnut ke liye - Profit vs Loss count
  const profitCount = allPositions.filter((stock) => {
    const curValue = stock.price * stock.qty;
    return curValue - stock.avg * stock.qty >= 0;
  }).length;
  const lossCount = allPositions.length - profitCount;

  // Bar chart ke liye - har position ka P&L
  const chartLabels = allPositions.map((stock) => stock.name);
  const chartValues = allPositions.map(
    (stock) => stock.price * stock.qty - stock.avg * stock.qty
  );

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "text-success" : "text-danger";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {allPositions.length > 0 && (
        <>
          {/* Profit vs Loss doughnut chart */}
          <div className="mt-5">
            <h4 className="mb-3">Profit vs Loss Positions</h4>
            <DoughnutChartComponent
              labels={["Profit", "Loss"]}
              values={[profitCount, lossCount]}
              colors={["#2cbe66", "#eb5b3c"]}
            />
          </div>

          {/* P&L bar chart */}
          <div className="mt-5">
            <h4 className="mb-3">P&L by Instrument</h4>
            <BarChartComponent
              labels={chartLabels}
              values={chartValues}
              label="P&L (₹)"
              barColor="#cb10a0"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Positions;