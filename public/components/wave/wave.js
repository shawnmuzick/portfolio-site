export const wave = `
const wave = document.createElement("div");
const inner = document.createElement('div');
wave.classList.add('wave');
inner.classList.add("componentInner");
inner.appendChild(wave);
document.getElementById('wave').prepend(inner);

/*
CSS--------------
.wave {
    position: relative;
    background: white;
    height: 300px;
    width: 300px;
    outline: 0px;
    border: 0px;
    overflow: hidden;
    z-index: 7;
    border-radius: 1rem;
  }
  .wave::before {
    content: "";
    position: absolute;
    background: linear-gradient(to top, var(--blue-accent), #0030cf);
    height: 200%;
    width: 200%;
    bottom: -65%;
    left: -50%;
    border-radius: 40%;
    animation: wave2 4s ease-in-out infinite;
  }
  .wave:after {
    content: "";
    position: absolute;
    background: linear-gradient(to bottom, var(--blue-accent), #0030cf);
    height: 200%;
    width: 200%;
    bottom: -70%;
    left: -50%;
    border-radius: 45%;
    animation: wave 4s ease-in-out infinite;
    z-index: 7;
  }


*/
`;
