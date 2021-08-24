function renderCanvasDom(
  domNode,
  options = { style: "width:1000px;height:800px" }
) {
  let canvasDom;
  console.log(
    "🚀 ~ file: index.js ~ line 7 ~ document.getElementById(canvas)",
    document.getElementById("canvas")
  );

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

function clearCanvas() {
  const canvasDom = document.getElementById("canvas");
  const ctx = canvasDom.getContext("2d");
  ctx.clearRect(230, 90, 50, 50);
}

function canvasInit() {
  renderCanvasDom();
  addCanvasEventListener();
  renderRect({ x: 10, y: 20, width: 100, height: 100 });
}

export { clearCanvas, canvasInit };
