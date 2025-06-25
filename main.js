import { initRenderer } from './renderer.js';
import { animateNormal } from './normalTriangle.js';
import { animateHollow } from './hollowTriangle.js';
import { animate3D } from './threeDTriangle.js';

initRenderer();

const rollBtn = document.getElementById("rollBtn");
const rigBtn = document.getElementById("rigrollBtn");
const label = document.getElementById("label");
const select = document.getElementById("rollTypeSelect");

function disableButtons(disabled) {
  rollBtn.disabled = disabled;
  rigBtn.disabled = disabled;
}

async function handleRoll(force = false) {
  disableButtons(true);
  label.style.opacity = 0;

  const type = select.value;

  if (type === "3d") {
    await animate3D(force);
    label.textContent = "3D Triangle 1 in 100";
  } else if (type === "hollow") {
    await animateHollow(force);
    label.textContent = "Hollow Triangle 1 in 50";
  } else {
    await animateNormal(force);
    label.textContent = "Triangle 1 in 2 chance";
  }

  label.style.opacity = 1;
  setTimeout(() => disableButtons(false), 400);
}

rollBtn.addEventListener("click", () => handleRoll(false));
rigBtn.addEventListener("click", () => handleRoll(true));
