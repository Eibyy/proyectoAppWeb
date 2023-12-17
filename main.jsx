import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UsersProvider } from "./context/UsersContext";
import { PublicacionesProvider } from "./context/PublicacionesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PublicacionesProvider>
    <UsersProvider>
      <App />
    </UsersProvider>
    </PublicacionesProvider>
  </React.StrictMode>
);
