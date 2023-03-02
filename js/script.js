let menuIcon = document.querySelector("#menu");

let closeIcon = document.querySelector("#close");

let overlayed = document.querySelector(".overlay");

let nav = document.querySelector(".nav-expand");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("hide");
  closeIcon.classList.remove("hide");
  nav.classList.remove("collapse");
  overlayed.classList.remove("hide");
});

closeIcon.addEventListener("click", () => {
  menuIcon.classList.remove("hide");
  closeIcon.classList.add("hide");
  nav.classList.add("collapse");
  overlayed.classList.add("hide");
});
