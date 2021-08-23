function renderCanvasDom(
  domNode,
  options = { style: "width:1000px;height:800px" }
) {
  const canvasDom = document.createElement("canvas");
  let targetParentDom = domNode;
  if (!domNode) {
    targetParentDom = document.body;
  }
  canvasDom.setAttribute("id", "canvas");

  // 添加 canvas 标签
  targetParentDom.appendChild(canvasDom);

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

  canvasDom.addEventListener("mousedown", (e) => {
    console.log("这里进行了 mousedown", e);
    const { x, y } = e;
    ctx.beginPath();
    ctx.moveTo(x, y);
  });
  canvasDom.addEventListener("mouseup", (e) => {
    ctx.closePath();
  });
  canvasDom.addEventListener("mousemove", (e) => {
    const { x, y } = e;
    console.log("这里进行了移动");
    ctx.lineTo(x, y);
    ctx.stroke();
  });
}

renderCanvasDom();
addCanvasEventListener();
renderRect({ x: 10, y: 20, width: 100, height: 100 });
