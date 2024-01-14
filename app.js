const block1 = document.querySelector("#block");

const block2 = block1.querySelector("#too"); // можно искать во вложенных элементах

console.log(block2);

console.log(block2.getBoundingClientRect()); // получить размер и координаты

const x = 1;

// вставить блок кода в определенное место относительно исходного
block2.insertAdjacentHTML(
  "afterend",
  `
  <h2 class="subtitle">Text</h2>
  <p>${x}</p>
`
);

console.log(block2.closest("#block")); // выдает ближайший родительский элемент или сам элемент
