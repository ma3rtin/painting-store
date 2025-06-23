import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { SessionProvider } from "./context/SessionContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SessionProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SessionProvider>
  </StrictMode>
);
