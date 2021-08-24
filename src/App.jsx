import React, { useState } from "react";
import {
  clearCanvas,
  canvasInit,
  changeStrokeColor,
} from "./components/Canvas";
import { Input } from "antd";
import "./style.css";

const App = () => {
  React.useEffect(() => {
    canvasInit();
  }, []);

  const [strokeColor, setStrokeColor] = useState(null);
  return (
    <>
      <div className="container">
        <div onClick={clearCanvas}>清空画板</div>
        <div className="color-editor">
          <Input
            onChange={(e) => {
              setStrokeColor(e.target.value);
            }}
          ></Input>
          <div
            onClick={() => {
              changeStrokeColor(strokeColor);
            }}
          >
            点击更换颜色
          </div>
        </div>
      </div>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default App;
