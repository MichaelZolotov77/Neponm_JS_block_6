const title = document.querySelector(".a_cat");
console.log(title);

function fn1() {
  console.log("hover!");
}

function fn2() {
  console.log("event!");
}

title.onmouseenter = fn1; // событие наведения мыши - hover, с приставкой on

title.addEventListener("click", fn2); // при клике отрабатывает событие
