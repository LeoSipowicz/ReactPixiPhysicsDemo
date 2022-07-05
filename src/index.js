import React from "react";
import ReactDOM from "react-dom";
import { Stage } from "react-pixi-fiber";
//import { Stage } from "@inlet/react-pixi";
import RotatingBunny from "./physicsSim";

const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb,
  height: height,
  width: width,
};

function App() {
  return (
    <Stage options={OPTIONS}>
      <RotatingBunny x={width / 2} y={height / 2} />
    </Stage>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
