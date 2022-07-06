import React from "react";
import ReactDOM from "react-dom";
import { Stage } from "react-pixi-fiber";
//import { Stage } from "@inlet/react-pixi";
//import RotatingBunny from "./physicsSim";
//import Spiral from "./spiral.js";
import Physics from "./physicsOnly";
import RotatingBunny from "./pixiReactTest";

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
