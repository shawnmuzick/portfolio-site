export function buildNav(nav) {
  const nav_expand_btn = document.getElementById("mobile-nav-expand");
  const nav_menu = document.getElementById("nav-menu");
  function handle_nav() {
    if (nav_menu.classList.contains("show")) {
      nav_menu.classList.remove("show");
    } else {
      nav_menu.classList.add("show");
    }
  }
  const links = {
    Demos: "/demos",
    Articles: "/articles",
    Bio: "/index.html#bio",
    Projects: "/index.html#projects",
    Certifications: "/index.html#certifications",
    Reviews: "/index.html#reviews",
    Contact: "/index.html#contact",
    Social: "/index.html#social",
  };
  for (let l in links) {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    let a = document.createElement("a");
    a.href = links[l];
    a.innerText = l;
    li.appendChild(a);
    nav.appendChild(li);
  }
  const nav_links = nav_menu.querySelectorAll("li.landing-menu-item");
  nav_expand_btn.addEventListener("click", handle_nav);
  nav_links.forEach((link) => {
    link.addEventListener("click", handle_nav);
  });
}
