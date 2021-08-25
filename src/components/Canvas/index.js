import { changeStrokeColor } from './stroke';
import { renderRect } from './rect';
import { drawCanvas } from './draw';
import { clearEraser } from './erase';
import { toImage } from './image';

// 事件对象
const eventArr = {
  mousedown: [],
  mousemove: [],
  mouseup: [],
};

// 设定功能是否启动
const flag = { drawFlag: true, eraserFlag: false };

function renderCanvasDom(domNode, { width, height }) {
  let canvasDom;
  if (document.getElementById('canvas')) {
    canvasDom = document.getElementById('canvas');
  } else {
    canvasDom = document.createElement('canvas');
    let targetParentDom = domNode;
    if (!domNode) {
      targetParentDom = document.body;
    }
    canvasDom.setAttribute('id', 'canvas');
    targetParentDom.appendChild(canvasDom);
  }

  // 不能通过 css 设置样式
  canvasDom.height = height;
  canvasDom.width = width;
}

function addCanvasEventListener() {
  const canvasDom = document.getElementById('canvas');
  const ctx = canvasDom.getContext('2d');

  canvasDom.addEventListener('mousedown', e => {
    eventArr.mousedown.forEach(func => {
      func(e, flag);
    });
  });

  canvasDom.addEventListener('mouseup', e => {
    eventArr.mouseup.forEach(func => {
      func(e);
    });
  });

  canvasDom.addEventListener('mousemove', e => {
    eventArr.mousemove.forEach(func => {
      func(e);
    });
  });
}

// 清除整个 canvas 画板
function clearCanvas() {
  const canvasDom = document.getElementById('canvas');
  const ctx = canvasDom.getContext('2d');
  ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
}

function canvasInit({ canvasWidth, canvasHeight }) {
  renderCanvasDom(null, { width: canvasWidth, height: canvasHeight });
  drawCanvas(eventArr, flag);
  clearEraser(eventArr, flag);
  addCanvasEventListener();
}

function startDraw() {
  flag.drawFlag = true;
  flag.eraserFlag = false;
}

function startEraser() {
  flag.eraserFlag = true;
  flag.drawFlag = false;
}

export { clearCanvas, canvasInit, renderRect, changeStrokeColor, startDraw, startEraser, toImage };
