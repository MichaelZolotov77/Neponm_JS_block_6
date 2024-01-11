const list1 = document.querySelectorAll("li");
console.log(list1); // NodeList(17)

list1.forEach((el) => (el.className = "li")); //добавим для всех li класс
list1.forEach((el) => (el.style.display = "none")); //все элементы скрылись
list1.forEach((el) => (el.style.display = "block")); //все элементы появились

const list2 = document.getElementsByTagName("li");
console.log(list2); // HTMLCollection(17)
for (let el of list2) {
  el.style.textTransform = "uppercase";
}
