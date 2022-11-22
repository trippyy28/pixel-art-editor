import "../styles/App.scss";
import Editor from "./Editor";
import { MyContext } from "./context/context";
import { useState } from "react";

function App() {
  const [isBlank, setIsBlank] = useState(false);
  return (
    <MyContext.Provider value={{ isBlank, setIsBlank }}>
      <div className="App">
        <Editor />
      </div>
    </MyContext.Provider>
  );
}

export default App;
