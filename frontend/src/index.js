import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NameContextProvider } from "./context/NameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NameContextProvider>
      <App />
    </NameContextProvider>
  </React.StrictMode>
);
