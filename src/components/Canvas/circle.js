function drawCircle(x, y, radius) {
    const canvasDom = document.getElementById('canvas');
    const ctx = canvasDom.getContext('2d');
    ctx.arc(x,y,radius)
}

export { drawCircle };
