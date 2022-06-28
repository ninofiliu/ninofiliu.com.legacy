import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HireMe from "./pages/hire-me/HireMe";
import Home from "./pages/home/Home";
import VisualAlgorithms from "./pages/visual-algorithms/VisualAlgorithms";
import "./styles.css";
import "./material-icons.css";
import mixpanel from "mixpanel-browser";

mixpanel.init("6c487cc89beda5d115a5e9223d831884");

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
