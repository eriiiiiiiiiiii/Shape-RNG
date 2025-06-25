// HollowTriangle.js
export function spawnHollowTriangle(scene) {
  const shape = new THREE.Shape();
  shape.moveTo(-0.4, -0.6);
  shape.lineTo(0.4, -0.6);
  shape.lineTo(0, 0.6);
  shape.closePath();

  const geometry = new THREE.ShapeGeometry(shape);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 }));
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), new THREE.LineBasicMaterial({ color: 0xffffff }));

  const group = new THREE.Group();
  group.add(mesh);
  group.add(edges);
  scene.add(group);

  // Fade in edge lines only
  let start = null;
  function animate(time) {
    if (!start) start = time;
    const t = Math.min((time - start) / 500, 1);
    edges.material.opacity = t;
    if (t < 1) requestAnimationFrame(animate);
  }
  edges.material.transparent = true;
  edges.material.opacity = 0;
  requestAnimationFrame(animate);
}

