export function showTriangle(container) {
  const triangle = document.createElement('div');
  triangle.style.position = 'absolute';
  triangle.style.left = '50%';
  triangle.style.top = '50%';
  triangle.style.transform = 'translate(-50%, -50%)';
  triangle.style.width = '0';
  triangle.style.height = '0';
  triangle.style.borderLeft = '60px solid transparent';
  triangle.style.borderRight = '60px solid transparent';
  triangle.style.borderBottom = '100px solid white';
  triangle.style.opacity = '0';
  triangle.style.transition = 'opacity 1s ease';

  container.appendChild(triangle);

  // Trigger fade-in after a short delay
  requestAnimationFrame(() => {
    triangle.style.opacity = '1';
  });
}
