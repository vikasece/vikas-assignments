import React from "react";
import ReactDOM from "react-dom";

const container = () => <div>This is react element</div>;

const Header = () => (
  <div>
    This is sample functional component
    {container()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
