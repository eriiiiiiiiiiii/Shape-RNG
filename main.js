import { showTriangle } from './fadeAnimation.js';

const container = document.getElementById('container');
const button = document.getElementById('spawnBtn');

button.addEventListener('click', () => {
  showTriangle(container);
});
