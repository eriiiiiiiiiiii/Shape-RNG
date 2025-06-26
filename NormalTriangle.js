export function spawnNormalTriangle(scene) {
  const shape = new THREE.Shape();
  shape.moveTo(-0.4, -0.6);
  shape.lineTo(0.4, -0.6);
  shape.lineTo(0, 0.6);
  shape.closePath();

  const geometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}
