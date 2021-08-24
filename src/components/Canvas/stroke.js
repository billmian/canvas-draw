function changeStrokeColor(color) {
  const canvasDom = document.getElementById('canvas');
  canvasDom.stroke = color;
}

export { changeStrokeColor };
