import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UrlProvider } from "./context/UrlContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UrlProvider>
    <App />
  </UrlProvider>
);
