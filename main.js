import { spawnNormalTriangle } from './shapes/NormalTriangle.js';
import { spawnHollowTriangle } from './shapes/HollowTriangle.js';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

document.addEventListener('DOMContentLoaded', () => {
  const rollBtn = document.getElementById('rollBtn');
  rollBtn.addEventListener('click', () => {
    scene.clear();
    // test: spawn normal triangle
    spawnNormalTriangle(scene);
  });
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
