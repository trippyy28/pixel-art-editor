import React, { useEffect } from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
const DrawingPanel = (props) => {
  const { width, height, selectedColor } = props;
  let rows = [];
  console.log(rows);
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  );
};

export default DrawingPanel;
