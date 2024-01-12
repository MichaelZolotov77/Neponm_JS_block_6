let accordions = document.querySelectorAll(".accordion");

function toggle() {
  console.log(this);
  this.nextElementSibling.classList.toggle("show");
}

accordions.forEach((accordion) => accordion.addEventListener("click", toggle));
