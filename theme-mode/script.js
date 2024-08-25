const toggleBtn = document.getElementById("toggle-theme");
const bodyContainer = document.getElementById("body-container");
const card = document.querySelector(".card");
const intro = document.querySelector(".intro");
const desc = document.querySelector(".desc");

toggleBtn.addEventListener("click", () => {
  bodyContainer.classList.toggle("dark");
  card.classList.toggle("dark");
  intro.classList.toggle("dark");
  desc.classList.toggle("dark");
});
