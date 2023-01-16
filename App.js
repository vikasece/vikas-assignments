import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {
    id: "Title",
  },
  "Namasthe React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading 2",
  },
  "Heading 2 tex dewefwet"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
