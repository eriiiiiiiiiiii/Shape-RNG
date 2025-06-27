 const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("game").appendChild(renderer.domElement);

let currentTriangle = null;

function createSmallTriangle() {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0, 1, 0,    // top
    -1, -1, 0,  // left
    1, -1, 0    // right
  ]);
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(vertices, 3)
  );
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geometry, material);
}

function showTriangleAnimation() {
  const pieces = [];

  for (let i = 0; i < 3; i++) {
    const piece = createSmallTriangle();
    piece.scale.set(0.4, 0.4, 0.4);
    scene.add(piece);
    pieces.push(piece);
  }

  pieces[0].position.set(0, 10, 0);    // Top
  pieces[1].position.set(-10, 0, 0);   // Left
  pieces[2].position.set(10, 0, 0);    // Right

  let progress = 0;
  const duration = 60;

  const animateIn = () => {
    if (progress < duration) {
      progress++;
      const t = progress / duration;

      pieces[0].position.y = 10 * (1 - t);
      pieces[1].position.x = -10 * (1 - t);
      pieces[2].position.x = 10 * (1 - t);

      requestAnimationFrame(animateIn);
    } else {
      document.getElementById("triangleText").style.display = "block";
    }
  };

  animateIn();
}

document.getElementById("rollBtn").addEventListener("click", () => {
  if (currentTriangle) {
    scene.remove(currentTriangle);
    currentTriangle = null;
  }
  document.getElementById("triangleText").style.display = "none";
  showTriangleAnimation();
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
