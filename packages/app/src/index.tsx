import React from "react";
import ReactDOM from "react-dom/client";
import helloWorld from "&example-lib";

const rootEl = document.getElementById("root");
if (rootEl === null) {
  throw new Error("no root");
}

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <div>{helloWorld}</div>
  </React.StrictMode>,
);
