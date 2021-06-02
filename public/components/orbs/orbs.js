export let orbs = `
const canvas = document.createElement("canvas");
canvas.classList.add('componentInner');
const context = canvas.getContext("2d");
document.getElementById("orbs").prepend(canvas);
let total = 10;
let current = 8;

function drawOrb() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(
    canvas.width / 2,
    canvas.height / 2,
    75,
    (1.5 + (1 - current / total)) * Math.PI,
    (3.5 - (1 - current / total)) * Math.PI
  );
  context.fillStyle = "rgb(126, 45, 255)";
  context.fill();
}

function keyDown(e) {
  switch (e.key) {
    case "ArrowUp":
      current += 1;
      break;
    case "ArrowDown":
      current -= 1;
      break;
  }
}
document.addEventListener("keydown", (e) => {
  keyDown(e);
});
window.onload = setInterval(drawOrb, 1000 / 15);
`;
