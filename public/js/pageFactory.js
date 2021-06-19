import { buildNav } from "/js/DomComponents/nav.min.js";
const main = document.getElementById("main");

async function getTemplate(elem, file) {
  const template = document.createElement("template");
  const data = await (await fetch(`/templates/${file}`)).text();
  template.innerHTML = data;
  let e = template.content.querySelector(elem);
  return e;
}

function insertElement(sibling, newNode, position) {
  // console.log(sibling);
  if (position === "after") {
    sibling.parentNode.insertBefore(newNode, sibling);
  } else {
    sibling.parentNode.insertBefore(newNode, sibling.nextSibling);
  }
}

async function getElements() {
  let nav = await getTemplate("nav", "nav.html");
  let mobileNav = await getTemplate("nav", "mobileNav.html");
  let footer = await getTemplate("footer", "footer.html");
  insertElement(main, nav, "after");
  insertElement(main, mobileNav, "before");
  insertElement(main, footer, "before");
  let n = document.getElementById("nav");
  buildNav(n);
}
getElements();
