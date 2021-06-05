import { orbs } from "./orbs/orbs.min.js";
import { skeleton } from "./skeleton/skeleton.min.js";
import { progress } from "./progressBar/progressBar.min.js";
const main = document.getElementById("main");

function buildComponent(code, id, captionText) {
  const component = document.createElement("div");
  component.classList.add("component");

  const componentContainer = document.createElement("div");
  componentContainer.classList.add("componentContainer");
  componentContainer.id = id;

  const pre = document.createElement("pre");
  pre.classList.add("code");
  pre.innerText = code;
  componentContainer.appendChild(pre);
  component.appendChild(componentContainer);

  const caption = document.createElement("p");
  caption.classList.add("componentCaption");
  caption.innerText = captionText;

  component.appendChild(caption);
  main.appendChild(component);

  eval(code);
}
buildComponent(orbs, "orbs", "Use the up/down arrow keys to interact");
buildComponent(progress, "progress", "");
buildComponent(skeleton, "skeleton", "Move the skeleton using arrow keys");
//disable arrow key navigation
document.addEventListener("keydown", (e) => {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
  }
});