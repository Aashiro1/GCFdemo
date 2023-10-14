// Nav sticky while scrolling

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");

  nav.classList.toggle("sticky", window.scrollY > 300);
});

// burger
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

// Function to hide the menu
function hideMenu() {
  navLinks.classList.remove("active");
  burgerMenu.classList.remove("active");
}

// Toggle menu on burger menu click
burgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  burgerMenu.classList.toggle("active");
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
      container.style.height = "auto"; // Expand container to fit content
      this.textContent = "Read Less";
    } else {
      container.style.height = "520px";
      this.textContent = "Read More";
    }
  });
});
