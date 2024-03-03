import React from "react";
import ReactDOM from "react-dom/client";
import LandingApp from "./components/LandingApp.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <LandingApp />
    </HashRouter>
  </React.StrictMode>
);
