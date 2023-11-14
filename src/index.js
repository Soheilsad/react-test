import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./global.css";
import store from "./redux/store";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);
console.log(process.env.PUBLIC_URL)
root.render(
  <HashRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
