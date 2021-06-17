const footer = document.getElementsByTagName("footer")[0];
const template = document.createElement("template");
async function getTemplate() {
  const data = await (await fetch("/templates/footer.html")).text();
  template.innerHTML = data;
  let section = template.content.querySelector('section');
  footer.appendChild(section);
}
getTemplate();
