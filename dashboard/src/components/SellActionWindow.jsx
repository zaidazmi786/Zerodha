import "./BuyActionWindow.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = () => {
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!qty || qty <= 0) {
      setError("Enter a valid quantity");
      return;
    }
    if (!price || price <= 0) {
      setError("Enter a valid price");
      return;
    }

    setError("");
    setIsSubmitting(true);

    
axios.post("https://backend-y0wn.onrender.com/newOrder", {    
      name: uid,
        qty: qty,
        price: price,
        mode: "SELL",
      })
      .then(() => {
        setIsSubmitting(false);
        generalContext.closeSellWindow();
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
        setError("Something went wrong. Try again.");
      });
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="buy-window-backdrop">
      <div className="container" id="buy-window" draggable="true">
        <div className="regular-order">
          <div className="stock-info">
            <span className="stock-name">{uid}</span>
          </div>
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </fieldset>
          </div>

          {error && <p className="error-text">{error}</p>}
        </div>

        <div className="buttons">
          <span className="margin-text">
            Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}
          </span>
          <div className="btn-group">
            <button
              className="sell-btn"
              onClick={handleSellClick}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Selling..." : "Sell"}
            </button>
            <button className="cancel-btn" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;