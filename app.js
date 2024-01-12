const btn = document.getElementById("toggle-btn");
const div = document.querySelector(".element");

function toggleVisibility() {
  // работает через условие
  // if (div.style.display === "none") {
  //   div.style.display = "block";
  // } else {
  //   div.style.display = "none";
  // }
  //работает через включение-выключение класса
  div.classList.toggle("hide");
}

btn.addEventListener("click", toggleVisibility);
