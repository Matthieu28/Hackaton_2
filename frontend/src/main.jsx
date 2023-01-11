import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserContextProvider } from "./contexts/CurrentUserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserContextProvider>
        <App />
      </CurrentUserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
