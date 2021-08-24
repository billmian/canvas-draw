import React from "react";
import { clearCanvas, canvasInit } from "./components/Canvas";
import "./style.css";

const App = () => {
  React.useEffect(() => {
    canvasInit();
  }, []);

  return (
    <>
      <div className="container">
        <div onClick={clearCanvas}>清空画板</div>
      </div>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default App;
