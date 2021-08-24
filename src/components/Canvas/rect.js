function renderRect(attr) {
  const { x, y, width, height, fill, stroke = '#000', lineWidth = 1 } = attr;
  const canvasDom = document.getElementById('canvas');
  const ctx = canvasDom.getContext('2d');

  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;

  ctx.strokeRect(50, 50, 180, 120); // 绘制矩形（无填充）x,y,width,height
}

export { renderRect };
