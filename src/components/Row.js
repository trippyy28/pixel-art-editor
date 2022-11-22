import React from "react";
import "../styles/row.scss";
import Pixel from "./Pixel";
const Row = (props) => {
  const { width, height, selectedColor, isBlank, setIsBlank } = props;
  let pixels = [];
  console.log(isBlank);
  console.log(pixels);
  console.log(selectedColor);

  for (let i = 0; i < width; i++) {
    pixels.push(
      <Pixel
        key={i}
        selectedColor={selectedColor}
        isBlank={isBlank}
        setIsBlank={setIsBlank}
      />
    );
  }

  return <div className="row">{pixels}</div>;
};
export default Row;
