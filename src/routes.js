import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/loginPage";
import NewAccount from "./components/newAccount";
import PaginaTeste from "./components/paginaTeste";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="new-account" element={<NewAccount />} />
        <Route path="pagina-teste" element={<PaginaTeste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
