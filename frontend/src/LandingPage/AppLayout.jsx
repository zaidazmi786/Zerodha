import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./LandingPage/NavBar";
import Footer from "./LandingPage/Footer";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <NavBar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

export default AppLayout;