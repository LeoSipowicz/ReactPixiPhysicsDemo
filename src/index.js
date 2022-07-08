import React from "react";
import ReactDOM from "react-dom";
import Physics from "./Physics";

const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb,
  height: height,
  width: width,
};

function App() {
  return (
    <svg width="400" height="400">
      <Physics cx={1000} cy={800} maxR={75} />
    </svg>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
