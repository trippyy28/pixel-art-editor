import React, { useState, useEffect } from "react";
import "../styles/pixel.scss";
const Pixel = (props) => {
  const { selectedColor, isBlank, setIsBlank } = props;
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

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
