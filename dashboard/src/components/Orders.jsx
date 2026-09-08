import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChartComponent from "./BarChartComponent";
import DoughnutChartComponent from "./DoughnutChartComponent";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
axios.get("https://backend-y0wn.onrender.com/allOrders").then((res) => {    
    console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  // Doughnut ke liye - Buy vs Sell count
  const buyCount = allOrders.filter((order) => order.mode === "BUY").length;
  const sellCount = allOrders.filter((order) => order.mode === "SELL").length;

  // Bar chart ke liye - har order ki value (qty * price)
  const chartLabels = allOrders.map((order) => order.name);
  const chartValues = allOrders.map((order) => order.qty * order.price);

  return (
    <>
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="order-table">
          <h3 className="title">Orders ({allOrders.length})</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td className={order.mode === "BUY" ? "text-success" : "text-danger"}>
                      {order.mode}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Buy vs Sell doughnut chart */}
          <div className="mt-5">
            <h4 className="mb-3">Buy vs Sell</h4>
            <DoughnutChartComponent
              labels={["Buy", "Sell"]}
              values={[buyCount, sellCount]}
              colors={["#4caf50", "#eb5b3c"]}
            />
          </div>

          {/* Order value bar chart */}
          <div className="mt-5">
            <h4 className="mb-3">Order Value by Instrument</h4>
            <BarChartComponent
              labels={chartLabels}
              values={chartValues}
              label="Order Value (₹)"
              barColor="#e013a6"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;