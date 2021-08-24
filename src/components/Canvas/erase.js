// 清除部分区域的橡皮
function clearEraser(eventArr, flag) {
  const canvasDom = document.getElementById('canvas');
  const ctx = canvasDom.getContext('2d');

  let isMouseDown = false;
  const mouseDownListener = e => {
    isMouseDown = true;
  };

  // 这里应该画一个圆形的橡皮
  const mouseMoveListener = e => {
    if (!flag.eraserFlag) {
      return;
    }
    const { offsetX, offsetY } = e;

    if (!isMouseDown) {
      return;
    }
    const eraserRadius = e.target.eraserRadius || 20;
    ctx.clearRect(offsetX, offsetY, eraserRadius, eraserRadius);
  };

  const mouseUpListener = e => {
    isMouseDown = false;
  };

  eventArr.mousedown.push(mouseDownListener);
  eventArr.mouseup.push(mouseUpListener);
  eventArr.mousemove.push(mouseMoveListener);
}

export { clearEraser };
