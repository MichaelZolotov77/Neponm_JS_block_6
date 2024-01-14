const list = document.getElementById("todos");
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  console.log(this);
  const newTodo = this.previousElementSibling.value.trim();
  console.log(newTodo);

  if (newTodo) {
    //add todo
    createTodo(newTodo);
    this.previousElementSibling.value = "";
  } else {
    alert("Input field is empty");
  }
}

function createTodo(text) {
  const li = document.createElement("li");
  li.innerText = text;
  li.className = "todo-item";
  li.addEventListener("click", removeTodo);

  list.append(li); // добавить элемент к другому элементу
}

function removeTodo() {
  console.log(this);
  this.removeEventListener("click", removeTodo); // желательно удалит листенер
  this.remove();
}
