import React, { useState } from 'react';
import { clearCanvas, canvasInit, changeStrokeColor, startEraser, startDraw, toImage } from './components/Canvas';
import { Input } from 'antd';
import './style.css';

const initOption = {
  canvasWidth: 1000,
  canvasHeight: 800,
};

const App = () => {
  const [eraserRadius, setEraserRadius] = React.useState();
  const [isUsingEraser, setIsUsingEraser] = React.useState(false);
  const [strokeColor, setStrokeColor] = useState(null);

  React.useEffect(() => {
    canvasInit({ canvasWidth: initOption.canvasWidth, canvasHeight: initOption.canvasHeight });
  }, []);

  const onCanvasMove = e => {
    if (isUsingEraser) {
      console.log('这里进行了 canvas 的移动：', e.pageX, e.pageY);
    }
  };

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
            onChange={e => {
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
      <div onMouseMove={onCanvasMove} className="canvas-container">
        <canvas id="canvas" />
        {isUsingEraser && <div className="eraser-circle" />}
      </div>
    </>
  );
};

export default App;
