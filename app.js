const el = document.querySelector(".place.top.container");
console.log(el.className); // place top container
console.log(el.classList); // DOMTokenList(3)

el.classList.add("active"); // DOMTokenList(4) - добавить новый класс
el.classList.remove("active"); // DOMTokenList(3) - удалить класс
console.log(el.classList.contains("top")); // true - проверить есть ли класс
el.classList.toggle("active"); // добавляет класс если нет, удаляет если есть
console.log(el.classList.toggle("active")); // возвращает true при добавлении, false при удалении
