import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HireMe from "./pages/hire-me/HireMe";
import Home from "./pages/home/Home";
import VisualAlgorithms from "./pages/visual-algorithms/VisualAlgorithms";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/visual-algorithms" element={<VisualAlgorithms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
