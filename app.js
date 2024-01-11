const title = document.querySelector("h1");
console.log(title);

const btn = document.querySelector("#btn");
console.log(btn);

const subtitle = document.querySelector(".gray.title");
console.log(subtitle);

const sections = document.querySelectorAll("section");
console.log(sections);

const anchor = document.querySelector(".a_api");
console.log(anchor);
console.log(anchor.innerText);
anchor.innerText = "REST API";

// const p = document.querySelector(".p_api");
// console.log(p.innerText); // только текст
// console.log(p.innerHTML); // вместе с html
// p.innerHTML = "Hello <b> World</b>";

const a = document.querySelector(".a_dom");
console.log(a.getAttribute("href")); // получение атрибута href
a.setAttribute("target", "_blank"); // установка нового атрибута target
console.log(a);
console.log(a.href); // выдает полный адрес ссылки
console.log(a.className); // возвращает название класса
