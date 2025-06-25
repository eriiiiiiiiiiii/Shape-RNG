// main.js
import { spawnHollowTriangle } from './HollowTriangle.js';

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

// Setup the scene
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Handle roll button
const rollBtn = document.getElementById("rollBtn");
rollBtn.addEventListener("click", () => {
  spawnHollowTriangle(scene);
});

// Animate the scene
function renderLoop() {
  requestAnimationFrame(renderLoop);
  renderer.render(scene, camera);
}
renderLoop();
