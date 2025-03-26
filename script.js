const container = document.querySelector(".blog-post-box__container");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  container.scrollBy({ left: -200 });
});

nextButton.addEventListener("click", () => {
  container.scrollBy({ left: 200 });
});