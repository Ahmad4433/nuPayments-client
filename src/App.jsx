import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/other/hero/Hero";
import Layout from "./components/layout/Layout";
import ApprovePayment from "./components/other/payments/approve-payment/ApprovePayment";

const App = () => {


  return (
    <Routes>
      <Route path="/payment/approve" element={<ApprovePayment/>} />
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
      </Route>
    </Routes>
  );
};

export default App;
