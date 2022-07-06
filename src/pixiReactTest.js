import React, { useCallback, useState } from "react";
import { usePixiTicker, Sprite } from "react-pixi-fiber";
//import { usePixiTicker, Sprite } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
//import RAPIER from "@dimforge/rapier2d";

const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny(props) {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.from("https://i.imgur.com/IaUrttj.png")}
      {...props}
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
