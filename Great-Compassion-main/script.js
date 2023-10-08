const readMoreButtons = document.querySelectorAll(".secondary-btn");

readMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const paragraph = this.parentElement.querySelector(
      ".paragraph-content.extra"
    );

    paragraph.classList.toggle("show");

    if (paragraph.classList.contains("show")) {
      this.textContent = "Read Less";
    } else {
      this.textContent = "Read More";
    }
  });
});
