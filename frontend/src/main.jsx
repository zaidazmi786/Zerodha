import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./LandingPage/home/HomePage";
import AboutPage from "./LandingPage/about/AboutPage";
import ProductPage from "./LandingPage/products/ProductPage";
import PricingPage from "./LandingPage/pricing/PricingPage";
import SupportPage from "./LandingPage/support/SupportPage";
import NotFound from "./LandingPage/NotFound";
import SignUpPage from "./LandingPage/signup/SignUpPage";

import NavBar from "./LandingPage/NavBar";
import Footer from "./LandingPage/Footer";
import Login from "./LandingPage/login/Login";
import ScrollToTop from "./ScrollToTop";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <ScrollToTop /> 
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<SignUpPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Product" element={<ProductPage />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Support" element={<SupportPage />} />
      

     <Route path="/Login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);