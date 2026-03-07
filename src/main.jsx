import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
