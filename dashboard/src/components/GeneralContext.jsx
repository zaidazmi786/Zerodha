import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";   // 👈 naya import

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},   // 👈 naya
  closeSellWindow: () => {},     // 👈 naya
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);   // 👈 naya
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;