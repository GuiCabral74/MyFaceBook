import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/loginPage";
import NewAccount from "./components/newAccount";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="new-account" element={<NewAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
