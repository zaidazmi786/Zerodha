import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChartComponent from "./BarChartComponent";
// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://backend-y0wn.onrender.com/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  // Chart ke liye labels (stock names) aur values (current value = price * qty) taiyar karna
  const chartLabels = allHoldings.map((stock) => stock.name);
  const chartValues = allHoldings.map((stock) => stock.price * stock.qty);

  return (
    <>
      <h3 className="title px-3 px-md-0">Holdings ({allHoldings.length})</h3>

      <div className="order-table table-responsive">
        <table className="table table-hover" style={{ minWidth: "700px" }}>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row text-center mt-4 g-3 px-3 px-md-0">
        <div className="col-12 col-sm-4">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col-12 col-sm-4">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col-12 col-sm-4">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Holdings ka bar chart */}
      {allHoldings.length > 0 && (
        <div className="mt-5 px-3 px-md-0">
          <h4 className="mb-3">Holdings Overview</h4>
          <BarChartComponent
            labels={chartLabels}
            values={chartValues}
            label="Current Value (₹)"
            barColor="#c41061"
          />
        </div>
      )}
    </>
  );
};

export default Holdings;