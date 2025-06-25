// NormalTriangle.js
export function spawnNormalTriangle(scene) {
  const geometry = new THREE.ShapeGeometry(
    new THREE.Shape()
      .moveTo(-0.4, -0.6)
      .lineTo(0.4, -0.6)
      .lineTo(0, 0.6)
      .closePath()
  );

  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
  const triangle = new THREE.Mesh(geometry, material);
  scene.add(triangle);

  // Fade in
  let start = null;
  function animate(time) {
    if (!start) start = time;
    const t = Math.min((time - start) / 500, 1); // 500ms fade
    triangle.material.opacity = t;
    if (t < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
