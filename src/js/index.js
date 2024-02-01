const button = document.querySelector(".btn-platforms");

const selectPlatform = document.querySelector(".btn-platforms  .platforms");

button.addEventListener("click", () => {
  selectPlatform.classList.toggle("active");
});

document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});
