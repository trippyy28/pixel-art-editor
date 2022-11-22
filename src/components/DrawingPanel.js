import React, { useRef } from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";

const DrawingPanel = (props) => {
  const { width, height, selectedColor, resetArt, isBlank } = props;

  const panelRef = useRef();
  let rows = [];
  console.log(rows);
  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        width={width}
        height={height}
        selectedColor={selectedColor}
        resetArt={resetArt}
        isBlank={isBlank}
      />
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
    </div>
  );
};

export default DrawingPanel;
