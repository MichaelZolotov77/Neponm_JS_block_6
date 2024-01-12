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

title.onmouseenter = null; // снятие обработчика события

title.removeEventListener("click", fn2); // cнятие обработчика
// Лучше будет для EventListener задать функцию извне, так как при
// removeEventListener функция, написанная внутри, продолжит работу

title.addEventListener("click", function () {
  console.log("Event!");
});
title.removeEventListener("click", function () {
  console.log("Event!"); // это две разные функции
});
