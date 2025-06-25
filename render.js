import * as THREE from 'three';

export const scene = new THREE.Scene();
export const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
camera.position.z = 10;

export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export function initRenderer() {
  function renderLoop() {
    requestAnimationFrame(renderLoop);
    renderer.render(scene, camera);
  }
  renderLoop();
}
