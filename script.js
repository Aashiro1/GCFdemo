// Nav sticky while scrolling

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");

  nav.classList.toggle("sticky", window.scrollY > 300);
});

// burger
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

function hideMenu() {
  navLinks.classList.remove("activate");
  burgerMenu.classList.remove("activate");
}

burgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("activate");
  burgerMenu.classList.toggle("activate");
});

const navLinksContainer = document.querySelector(".ul");
const links = navLinksContainer.querySelectorAll("li");

links.forEach((link) => {
  link.addEventListener("click", function () {
    hideMenu();
  });
});

// readmore btn

const readMoreButtons = document.querySelectorAll(".secondary-btn");

readMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const container = button.closest(
      ".our-story-container, .about-us-container"
    );
    const paragraph = this.parentElement.querySelector(
      ".paragraph-content.extra"
    );

    paragraph.classList.toggle("show");

    if (paragraph.classList.contains("show")) {
      container.style.paddingBottom = "40px";
      container.style.height = "auto";
      this.textContent = "Read Less";
    } else {
      container.style.height = "520px";
      this.textContent = "Read More";
      container.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// section animation
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Active link
const activePage = window.location.pathname;
const navBarLinks = document.querySelectorAll(".nav-link");
navBarLinks.forEach((link) => {
  const navLinkPathname = new URL(link.href).pathname;

  if (
    (activePage === navLinkPathname && activePage !== "/index.html") ||
    (activePage === "/index.html" &&
      (navLinkPathname === "/" || navLinkPathname === "/index.html"))
  ) {
    link.classList.add("active");
  }
});
