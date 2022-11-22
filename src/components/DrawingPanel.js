import React from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
const DrawingPanel = (props) => {
  const { width, height, selectedColor, resetArt, isBlank, setIsBlank } = props;
  let rows = [];
  console.log(rows);
  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        width={width}
        selectedColor={selectedColor}
        resetArt={resetArt}
        isBlank={isBlank}
        setIsBlank={setIsBlank}
      />
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  );
};

export default DrawingPanel;
