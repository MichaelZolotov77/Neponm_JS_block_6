const list = document.getElementById("todos");
document.querySelector("button").addEventListener("click", handleClick);
// событие загрузки страницы
document.addEventListener("DOMContentLoaded", loadTodos);

function handleClick() {
  console.log(this);
  const newTodo = this.previousElementSibling.value.trim();
  console.log(newTodo);

  if (newTodo) {
    //add todo
    createTodo(newTodo);
    saveToStorage(newTodo);
    this.previousElementSibling.value = "";
  } else {
    alert("Input field is empty");
  }
}

// сохранить информацию в браузере
function saveToStorage(todo) {
  const todos = JSON.parse(localStorage.getItem("tasks")) || [];
  localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("tasks"));
  if (todos) {
    todos.forEach((todo) => createTodo(todo));
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

// хранилище находится во вкладке "Приложение"("Application")
// localStorage.setItem("todos", "123"); // запись в локальное хранилище браузера
// console.log(localStorage.getItem("todos")); // чтение значения по ключу, если укажем несуществующий ключ, получим null
// localStorage.clear(); // очистить весь localStorage
