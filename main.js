const toogle = document.querySelector(".toogle");
const menu = document.querySelector(".menu");
const icons = document.querySelector(".icons");

toogle.addEventListener("click", () => {
  menu.classList.toogle("active");
  icons.classList.toogle("active");
});
