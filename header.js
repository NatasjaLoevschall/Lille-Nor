// Baseret på W3Schools' scroll-styling princip

const header = document.querySelector("header");
const hero = document.querySelector(".hero");

if (header && hero) {

  function handleScroll() {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos >= heroBottom - header.offsetHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 
}

// Booking system

const trigger = document.querySelector("#baggrundscirkel2");

if (header && trigger) {
  let prevScrollPos = window.pageYOffset;

  function hideShowHeaderFromSection() {
    const currentScrollPos = window.pageYOffset;

    // Før vi rammer baggrundscirkel2: header skal altid være synlig
    const triggerPoint = trigger.offsetTop - header.offsetHeight;

    if (currentScrollPos < triggerPoint) {
      header.classList.remove("hide-on-scroll");
      prevScrollPos = currentScrollPos;
      return;
    }

    // Fra baggrundscirkel2 og ned: hide/show efter scrollretning
    if (prevScrollPos > currentScrollPos) {
      // scroller op
      header.classList.remove("hide-on-scroll");
    } else {
      // scroller ned
      header.classList.add("hide-on-scroll");
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", hideShowHeaderFromSection);
  hideShowHeaderFromSection();
}

// Baseret på W3Schools' dropdown-toggle princip - Søgeikon:

const toggleBtn = document.querySelector(".search-toggle");
const dropdown = document.querySelector(".search-dropdown");
const closeBtn = document.querySelector(".search-close");

// Kør kun koden hvis toggleBtn og dropdown findes
if (toggleBtn && dropdown) {

  // Klik på ikon -> toggle dropdown - stop propagation for at undgå lukning straks efter åbning
  toggleBtn.addEventListener("click", function (event) {
    event.stopPropagation(); 
    dropdown.classList.toggle("open");
  });

  // Klik på kryds -> luk
  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdown.classList.remove("open");
    });
  }

  // Klik udenfor -> luk dropdown
  document.addEventListener("click", function (event) {
    const clickInsideDropdown = dropdown.contains(event.target);
    const clickOnButton = toggleBtn.contains(event.target);

    if (!clickInsideDropdown && !clickOnButton) {
      dropdown.classList.remove("open");
    }
  });
}

