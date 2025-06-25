// main.js
import { spawnNormalTriangle } from './NormalTriangle.js';
import { spawnHollowTriangle } from './HollowTriangle.js';

// Setup scene
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Roll logic
document.getElementById('rollBtn').addEventListener('click', () => {
  // Clear previous shapes
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  // Randomly choose triangle type (adjust as needed)
  const choice = Math.random();
  if (choice < 0.5) {
    spawnNormalTriangle(scene);
  } else {
    spawnHollowTriangle(scene);
  }
});

// Animate loop
function renderLoop() {
  requestAnimationFrame(renderLoop);
  renderer.render(scene, camera);
}
renderLoop();
