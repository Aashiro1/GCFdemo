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
