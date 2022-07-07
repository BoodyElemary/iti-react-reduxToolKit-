import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import MyNav from "./components/MyNav";
import Myhome from "./pages/Myhome.jsx";
import MyFooter from "./components/MyFooter";
import MyContact from "./pages/MyContact";
import MyPricing from "./pages/MyPricing";
import MyCart from "./pages/MyCart";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <MyNav></MyNav>

      <Routes>
        <Route index element={<Myhome />} />
        <Route path="Home" element={<Myhome />} />
        <Route path="Contact" element={<MyContact />} />
        <Route path="Pricing" element={<MyPricing />} />
        <Route path="cart" element={<MyCart />} />
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
