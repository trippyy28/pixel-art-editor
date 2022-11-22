import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./context/context";

import "../styles/pixel.scss";
const Pixel = (props) => {
  const { selectedColor } = props;
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);
  const { isBlank } = useContext(MyContext);
  const { setIsBlank } = useContext(MyContext);

  useEffect(() => {
    if (isBlank) {
      setPixelColor("#fff");
    }
    setIsBlank(false);
  }, [isBlank]);

  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }
  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }
  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  }
  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
};

export default Pixel;
