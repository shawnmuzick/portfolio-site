export const progress = `
const progress = document.createElement("progress");
progress.classList.add("progress");
progress.classList.add("componentInner");
progress.setAttribute("value", 0);
progress.setAttribute("max", 100);
let i = 1;
setInterval(() => {
  if (progress.value === 100) {
    i = -1;
  } else if (progress.value === 0) {
    i = 1;
  }
  progress.value += i;
  progress.setAttribute('data-count', progress.value);
},50);

document.getElementById('progress').prepend(progress);
`;