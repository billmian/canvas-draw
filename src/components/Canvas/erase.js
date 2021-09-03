// 清除部分区域的橡皮
function clearEraser(eventArr, flag) {
  const canvasContainerDom = document.getElementById("canvas-container");
  const canvasDom = document.getElementById("canvas");
  const ctx = canvasDom.getContext("2d");

  let isMouseDown = false;
  const mouseDownListener = (e) => {
    isMouseDown = true;
  };

  // 这里应该画一个圆形的橡皮
  const mouseMoveListener = (e) => {
    if (!flag.eraserFlag) {
      let eraser = document.getElementById("eraser-circle");
      if (eraser) {
        eraser.setAttribute("style", `display:none;`);
      }
      return;
    }
    const { clientX, clientY } = e;

    //不能使用 offsetX 和 offsetY ，offsetX offsetY 是不回
    const eraserRadius = e.target.eraserRadius || 20;
    let eraser = document.getElementById("eraser-circle");
    if (!eraser) {
      eraser = document.createElement("div");
      eraser.setAttribute("id", "eraser-circle");
      eraser.className = "eraser-circle";
      canvasContainerDom.appendChild(eraser);
    }
    const containerRect = canvasContainerDom.getBoundingClientRect();
    const containerClientX = containerRect.left;
    const containerClientY = containerRect.top;

    let eraserLeft = clientX - containerClientX - eraserRadius / 2;
    let eraserTop = clientY - containerClientY - eraserRadius / 2;

    if (eraserLeft < 0) {
      eraserLeft = 0;
    }
    if (eraserTop < 0) {
      eraserTop = 0;
    }

    eraser.setAttribute(
      "style",
      `left:${eraserLeft}px;top:${eraserTop}px;width:${eraserRadius}px;height:${eraserRadius}px;display:block;`
    );

    if (isMouseDown) {
      ctx.clearRect(eraserLeft, eraserTop, eraserRadius, eraserRadius);
    }
  };

  const mouseUpListener = (e) => {
    isMouseDown = false;
  };

  eventArr.mousedown.push(mouseDownListener);
  eventArr.mouseup.push(mouseUpListener);
  eventArr.mousemove.push(mouseMoveListener);
}

export { clearEraser };
