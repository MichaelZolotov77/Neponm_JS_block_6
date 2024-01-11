const anchor = document.querySelector(".place.top.container");
console.log(anchor);

console.dir(anchor.parentElement); // получаем родительский элемент
console.log(anchor.childElementCount); // сколько дочерних элементов
console.log(anchor.children); // HTMLCollection(3)
console.log(anchor.firstElementChild); // первый ребенок
console.log(anchor.lastElementChild); // последний ребенок

const p = document.querySelector(".fallback-cop");
console.log(p.nextElementSibling); // следующий сосед
console.log(p.previousElementSibling); // предыдущий сосед
