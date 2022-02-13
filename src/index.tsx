import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Global, css } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          background-color: #f1f1f1;
          color: #7d7d7d;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
