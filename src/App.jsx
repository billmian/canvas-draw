import React, { useRef, useState } from "react";
import {
  clearCanvas,
  canvasInit,
  changeStrokeColor,
  startEraser,
  startDraw,
  toImage,
} from "./components/Canvas";
import { Input } from "antd";
import "./style.css";

const initOption = {
  canvasWidth: 1000,
  canvasHeight: 800,
  eraserRadius: 20,
};

const App = () => {
  const [eraserRadius, setEraserRadius] = React.useState(
    initOption.eraserRadius
  );

  const [eraserOffset, setEraserOffset] = React.useState({ x: -100, y: -100 });
  const [isUsingEraser, setIsUsingEraser] = React.useState(false);
  const [strokeColor, setStrokeColor] = useState(null);

  const canvasRef = useRef(null);

  React.useEffect(() => {
    canvasInit({
      canvasWidth: initOption.canvasWidth,
      canvasHeight: initOption.canvasHeight,
      eraserRadius: initOption.eraserRadius,
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="action-item" onClick={clearCanvas}>
          清空画板
        </div>
        <div className="action-item" onClick={startDraw}>
          画笔
        </div>
        <div
          className="action-item"
          onClick={() => {
            startEraser();
            setIsUsingEraser(true);
          }}
        >
          橡皮
        </div>
        <div className="action-item" onClick={toImage}>
          保存图片
        </div>
        <div className="color-editor">
          <Input
            onChange={(e) => {
              setStrokeColor(e.target.value);
            }}
          />
          <div
            onClick={() => {
              changeStrokeColor(strokeColor);
            }}
          >
            点击更换颜色
          </div>
        </div>
      </div>
      <div className="canvas-container" id="canvas-container">
        <canvas id="canvas" ref={canvasRef} />
        {isUsingEraser && (
          <div
            className="eraser-circle"
            onMouseMove={(event) => {
              event.stopPropagation();
              event.nativeEvent.stopImmediatePropagation();

              event.preventDefault();
            }}
            style={{
              left: eraserOffset.x - eraserRadius / 2,
              top: eraserOffset.y - eraserRadius / 2,
              width: eraserRadius,
              height: eraserRadius,
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
