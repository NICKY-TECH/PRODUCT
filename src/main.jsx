import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import overlays from "./feature/over-lay.js";
import cart from "./feature/cart.js";
import total from "./feature/amount.js";
import contents from "./feature/lay-content.js";
import onCart from "./feature/onCart.js";
import active from "./feature/active.js";

const store = configureStore({
  reducer: {
    overlay: overlays,
    displayCart: cart,
    cont: contents,
    total,
    onCart,
    active

  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
