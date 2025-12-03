
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("h1", {}, "React first tag");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);