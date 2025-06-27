const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("game").appendChild(renderer.domElement);

// Create triangle shape
function createTriangle(color) {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
     0,  1, 0,   // top
    -1, -1, 0,   // left
     1, -1, 0    // right
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
  return new THREE.Mesh(geometry, material);
}

let currentTriangle = null;

function showRandomTriangle() {
  if (currentTriangle) scene.remove(currentTriangle);
  const isGreen = Math.random() < 0.5;
  currentTriangle = createTriangle(isGreen ? 0x00ff00 : 0xff0000);
  scene.add(currentTriangle);
}

document.getElementById("rollBtn").addEventListener("click", showRandomTriangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  if (currentTriangle) {
    currentTriangle.rotation.z += 0.01;
  }
  renderer.render(scene, camera);
}
animate();
