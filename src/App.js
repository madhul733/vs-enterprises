import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import WhoWeAre from "./pages/WhoWeAre";
import Products from "./pages/Products";
import WhyChooseUs from "./pages/WhyChooseUs";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Solutions from "./pages/Solutions";
import GetQuote from "./pages/GetQuote";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
function HomePage() {
  return (
    <>
      <Home />
       <WhoWeAre />
      <Products />
      <WhyChooseUs />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <NavBar />
   <ScrollToTop />
      <Routes>

         <Route
    path="/"
    element={<HomePage />}
  />

  <Route
    path="/home"
    element={<HomePage />}
  />
        <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/about-us"
          element={<AboutUs />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/career"
          element={<Career />}
        />

        <Route
          path="/solutions"
          element={<Solutions />}
        />

        <Route
          path="/get-quote"
          element={<GetQuote />}
        />

      </Routes>

      <Footer />

      {/* CHATBOT ONLY */}
      <ChatBot />

    </BrowserRouter>
  );
}

export default App;