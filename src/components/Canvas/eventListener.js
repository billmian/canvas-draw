function addCanvasEventListener(canvasEventArr, flag) {
  const canvasContainerDom = document.getElementById("canvas-container");

  canvasContainerDom.addEventListener("mousedown", (e) => {
    canvasEventArr.mousedown.forEach((func) => {
      func(e, flag);
    });
  });

  canvasContainerDom.addEventListener("mouseup", (e) => {
    canvasEventArr.mouseup.forEach((func) => {
      func(e, flag);
    });
  });

  canvasContainerDom.addEventListener("mousemove", (e) => {
    canvasEventArr.mousemove.forEach((func) => {
      func(e, flag);
    });
  });
}

export { addCanvasEventListener };
