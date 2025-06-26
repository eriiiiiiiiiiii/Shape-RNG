import { spawnNormalTriangle } from './NormalTriangle.js';
// import { spawnHollowTriangle } from './HollowTriangle.js'; // Uncomment when needed

document.addEventListener('DOMContentLoaded', () => {
  const rollBtn = document.getElementById('rollBtn');

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  rollBtn.addEventListener('click', () => {
    spawnNormalTriangle(scene);
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
