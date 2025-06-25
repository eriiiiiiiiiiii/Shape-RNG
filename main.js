import { getMessage } from './helper.js';

document.getElementById('testBtn').addEventListener('click', () => {
  const output = document.getElementById('output');
  output.textContent = getMessage();
});
