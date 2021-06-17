const nav_expand_btn = document.getElementById("mobile-nav-expand");
const nav_menu = document.getElementById("nav-menu");
const nav_links = nav_menu.querySelectorAll("li.landing-menu-item");

const links = {
  Demos: "/demos.html",
  Articles: "/articles.html",
  Bio: "/index.html#bio",
  Projects: "/index.html#projects",
  Certifications: "/index.html#certifications",
  Reviews: "/index.html#reviews",
  Contact: "/index.html#contact",
  Social: "/index.html#social",
};

function buildNav() {
  let nav = document.getElementById("nav");
  for (let l in links) {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    let a = document.createElement("a");
    a.href = links[l];
    a.innerText = l;
    li.appendChild(a);
    nav.appendChild(li);
  }
}
buildNav();

function handle_nav() {
  if (nav_menu.classList.contains("show")) {
    nav_menu.classList.remove("show");
  } else {
    nav_menu.classList.add("show");
  }
}

nav_expand_btn.addEventListener("click", handle_nav);

nav_links.forEach((link) => {
  link.addEventListener("click", handle_nav);
});