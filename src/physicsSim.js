import React, { useCallback, useState } from "react";
import { usePixiTicker } from "react-pixi-fiber";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
//import RAPIER from "https://cdn.skypack.dev/@dimforge/rapier2d-compat";

const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny() {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.from("https://i.imgur.com/IaUrttj.png")}
    />
  );
}

function RotatingBunny(props) {
  const [rotation, setRotation] = useState(0);
  const animate = useCallback((delta) => {
    setRotation((rotation) => rotation + 0.1 * delta);
  }, []);
  usePixiTicker(animate);

  return <Bunny {...props} rotation={rotation} />;
}

export default RotatingBunny;
