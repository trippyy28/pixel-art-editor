import React, { useState, useContext } from "react";
import "../styles/editor.scss";
import { BlockPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import { MyContext } from "./context/context";

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");
  const [resetArt, setResetArt] = useState(false);
  const { isBlank } = useContext(MyContext);
  const { setIsBlank } = useContext(MyContext);
  function intializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);
    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }
  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">
      <h1>8bit Painter</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              //onChange={}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button onClick={intializeDrawingPanel} className="button">
        {buttonText}
      </button>
      {!hideDrawingPanel && (
        <button onClick={() => setIsBlank(!isBlank)} className="button">
          Blank
        </button>
      )}

      {hideOptions && (
        <BlockPicker color={selectedColor} onChangeComplete={changeColor} />
      )}
      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
};

export default Editor;
