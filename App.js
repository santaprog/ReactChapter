import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = ()=> <h1 id="heading">Starting APP from JSX</h1>;

// React Component
const HeadComponent = () => (
  <div id="container">
    <JsxHeading/>
    <h1>This is from React Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent />);
