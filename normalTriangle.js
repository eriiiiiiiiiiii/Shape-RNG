import { scene } from './renderer.js';
import * as THREE from 'three';

const solidMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

function makeBottomTrapeziumHalf(isLeft) {
  const shape = new THREE.Shape();
  if (isLeft) {
    shape.moveTo(-0.4, -0.6);
    shape.lineTo(0, -0.6);
    shape.lineTo(0, -0.15);
    shape.lineTo(-0.25, -0.15);
  } else {
    shape.moveTo(0.4, -0.6);
    shape.lineTo(0, -0.6);
    shape.lineTo(0, -0.15);
    shape.lineTo(0.25, -0.15);
  }
  shape.closePath();
  return new THREE.Mesh(new THREE.ShapeGeometry(shape), solidMaterial);
}

function makeTopTriangle() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.25, -0.15);
  shape.lineTo(0.25, -0.15);
  shape.lineTo(0, 0.6);
  shape.closePath();
  return new THREE.Mesh(new THREE.ShapeGeometry(shape), solidMaterial);
}

function animatePart(part, from, to, duration) {
  return new Promise(resolve => {
    const start = performance.now();
    function animate(time) {
      const t = Math.min((time - start) / duration, 1);
      part.position.lerpVectors(from, to, t);
      if (t < 1) requestAnimationFrame(animate);
      else resolve();
    }
    requestAnimationFrame(animate);
  });
}

function explosionEffect() {
  const explosion = document.createElement("div");
  explosion.className = "explosion";
  document.body.appendChild(explosion);
  setTimeout(() => explosion.remove(), 600);
}

export async function animateNormal() {
  scene.clear();

  const leftHalf = makeBottomTrapeziumHalf(true);
  const rightHalf = makeBottomTrapeziumHalf(false);
  const topTriangle = makeTopTriangle();

  leftHalf.position.set(-6, 0, 0);
  rightHalf.position.set(6, 0, 0);
  topTriangle.position.set(0, 6, 0);

  scene.add(leftHalf, rightHalf, topTriangle);

  await animatePart(leftHalf, leftHalf.position.clone(), new THREE.Vector3(0, 0, 0), 200);
  await new Promise(r => setTimeout(r, 50));
  await animatePart(rightHalf, rightHalf.position.clone(), new THREE.Vector3(0, 0, 0), 200);
  await new Promise(r => setTimeout(r, 50));
  await animatePart(topTriangle, topTriangle.position.clone(), new THREE.Vector3(0, 0, 0), 200);

  explosionEffect();
}

