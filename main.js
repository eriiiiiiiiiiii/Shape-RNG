document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('triangleCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawTriangle() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const size = 100;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - size / Math.sqrt(3));
    ctx.lineTo(centerX - size / 2, centerY + size / (2 * Math.sqrt(3)));
    ctx.lineTo(centerX + size / 2, centerY + size / (2 * Math.sqrt(3)));
    ctx.closePath();
    ctx.fill();
  }

  document.getElementById('spawnBtn').addEventListener('click', drawTriangle);
});
