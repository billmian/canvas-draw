import React, { useState } from 'react';
import { clearCanvas, canvasInit, changeStrokeColor, startEraser, startDraw, toImage } from './components/Canvas';
import { Input } from 'antd';
import './style.css';

const App = () => {
  React.useEffect(() => {
    canvasInit();
  }, []);

  const [strokeColor, setStrokeColor] = useState(null);
  return (
    <>
      <div className="container">
        <div className="action-item" onClick={clearCanvas}>
          清空画板
        </div>
        <div className="action-item" onClick={startDraw}>
          画笔
        </div>
        <div className="action-item" onClick={startEraser}>
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
      <canvas id="canvas" />
    </>
  );
};

export default App;
