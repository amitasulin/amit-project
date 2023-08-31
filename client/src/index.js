import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { StrainProvider } from "./context/strainContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <AppProvider>
      <StrainProvider>
        <Router>
          <App />
        </Router>
      </StrainProvider>
    </AppProvider>
  </UserProvider>
);
reportWebVitals();
