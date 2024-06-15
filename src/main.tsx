import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// 전역 변수로 root를 선언
let root: Root | null = null;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");

  if (container && !root) {
    root = ReactDOM.createRoot(container);
  }

  if (root) {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});
