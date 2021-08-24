function toImage() {
  const canvasDom = document.getElementById('canvas');
  const ctx = canvasDom.getContext('2d');
  const dataImg = new Image();
  dataImg.src = canvasDom.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataImg.src;
  a.download = '下载canvas.png';
  a.click();
}

export { toImage };
