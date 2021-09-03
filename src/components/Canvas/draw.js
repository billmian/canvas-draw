function drawCanvas(eventArr, flag) {
  const canvasDom = document.getElementById("canvas");
  const ctx = canvasDom.getContext("2d");
  let isMouseDown = false;

  const mouseDownListener = (e) => {
    if (!flag.drawFlag) {
      return;
    }
    isMouseDown = true;
    const { offsetX, offsetY } = e;
    ctx.beginPath();
    ctx.strokeStyle = e?.target?.stroke || "#000";
    ctx.moveTo(offsetX, offsetY);
    flag.drawFlag = true;
  };

  const mouseUpListener = (e) => {
    if (!flag.drawFlag) {
      return;
    }
    isMouseDown = false;
    ctx.closePath();
  };

  const mouseMoveListener = (e) => {
    if (!flag.drawFlag || !isMouseDown) {
      return;
    }
    const { offsetX, offsetY } = e;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  eventArr.mousedown.push(mouseDownListener);
  eventArr.mouseup.push(mouseUpListener);
  eventArr.mousemove.push(mouseMoveListener);
}

export { drawCanvas };
