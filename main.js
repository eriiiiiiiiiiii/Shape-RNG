const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Triangle coordinates and color
function drawTriangle() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const size = 100;
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size / Math.sqrt(3)); // top
  ctx.lineTo(centerX - size / 2, centerY + size / (2 * Math.sqrt(3))); // bottom left
  ctx.lineTo(centerX + size / 2, centerY + size / (2 * Math.sqrt(3))); // bottom right
  ctx.closePath();
  ctx.fill();
}

document.getElementById('spawnBtn').addEventListener('click', drawTriangle);
