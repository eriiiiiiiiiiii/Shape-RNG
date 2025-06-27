const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("game").appendChild(renderer.domElement);

function createSmallTriangle() {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0, 1, 0,   // top
    -1, -1, 0, // left
     1, -1, 0  // right
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  return new THREE.Mesh(geometry, material);
}

function showTriangleAnimation() {
  const pieces = [];

  // Create 3 triangles coming from each screen edge
  for (let i = 0; i < 3; i++) {
    const piece = createSmallTriangle();
    piece.scale.set(0.4, 0.4, 0.4); // smaller triangles
    scene.add(piece);
    pieces.push(piece);
  }

  // Starting positions: top, left, right
  pieces[0].position.set(0, 10, 0);
  pieces[1].position.set(-10, 0, 0);
  pieces[2].position.set(10, 0, 0);

  let progress = 0;
  const duration = 60; // frames

  const animateIn = () => {
    if (progress < duration) {
      progress++;

      const t = progress / duration;

      // Animate toward center
      pieces[0].position.y = 10 * (1 - t);
      pieces[1].position.x = -10 * (1 - t);
      pieces[2].position.x = 10 * (1 - t);

      requestAnimationFrame(animateIn);
    } else {
      document.getElementById('triangleText').style.display = 'block';
    }
  };

  animateIn();
}
