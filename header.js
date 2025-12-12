// Baseret på W3Schools' scroll-styling princip
document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");

  function handleScroll() {
    if (!header || !hero) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos >= heroBottom - header.offsetHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});