function renderCanvasDom(
  domNode,
  options = { style: "width:1000px;height:800px" }
) {
  let canvasDom;
  if (document.getElementById("canvas")) {
    canvasDom = document.getElementById("canvas");
  } else {
    canvasDom = document.createElement("canvas");
    let targetParentDom = domNode;
    if (!domNode) {
      targetParentDom = document.body;
    }
    canvasDom.setAttribute("id", "canvas");
    targetParentDom.appendChild(canvasDom);
  }

  // 不能通过 css 设置样式
  canvasDom.height = 800;
  canvasDom.width = 1000;
}

function renderRect(attr) {
  const { x, y, width, height, fill, stroke = "#000", lineWidth = 1 } = attr;
  const canvasDom = document.getElementById("canvas");
  const ctx = canvasDom.getContext("2d");

  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;

  ctx.strokeRect(50, 50, 180, 120); // 绘制矩形（无填充）x,y,width,height
}

function addCanvasEventListener() {
  const canvasDom = document.getElementById("canvas");
  const ctx = canvasDom.getContext("2d");
  let drawFlag = false;

  canvasDom.addEventListener("mousedown", (e) => {
    const { offsetX, offsetY } = e;
    console.log("这里输出 stroke 的颜色", e.target.stroke);
    ctx.beginPath();
    ctx.strokeStyle = e?.target?.stroke || "#000";
    ctx.moveTo(offsetX, offsetY);
    drawFlag = true;
  });
  canvasDom.addEventListener("mouseup", (e) => {
    drawFlag = false;
    ctx.closePath();
  });
  canvasDom.addEventListener("mousemove", (e) => {
    if (!drawFlag) {
      return;
    }
    const { offsetX, offsetY } = e;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  });
}

function clearCanvas() {
  const canvasDom = document.getElementById("canvas");
  const ctx = canvasDom.getContext("2d");
  ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
}

function changeStrokeColor(color) {
  const canvasDom = document.getElementById("canvas");
  canvasDom.stroke = color;
}

function canvasInit() {
  renderCanvasDom();
  addCanvasEventListener();
}

export { clearCanvas, canvasInit, renderRect, changeStrokeColor };
