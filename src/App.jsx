import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/other/hero/Hero";
import Layout from "./components/layout/Layout";
import InvoiceQr from "./components/other/invoice-detail-qr/InvoiceQr";

const App = () => {


  return (
    <Routes>
<Route path="/invoive/detail" element={<InvoiceQr />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
      </Route>
    </Routes>
  );
};

export default App;
