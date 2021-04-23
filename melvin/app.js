const menuBtn = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("close");
});
const list = Array.from(document.querySelectorAll(".list"));
list.forEach((list) => {
  list.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("close");
  });
});
