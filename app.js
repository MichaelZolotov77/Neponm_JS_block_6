const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

inputs.forEach((input) => input.addEventListener("keypress", handleEvent));
form.addEventListener("submit", handleSubmit); // событие отправки

function handleEvent(event) {
  console.log(event);
  console.dir(event.target); // элемент, на котором произошло событие

  if (event.key === "Enter") {
    event.preventDefault();
    //если нажмем на enter, переместим фокус на следующего соседа
    event.target.nextElementSibling.focus();
  }
}

function handleSubmit(event) {
  event.preventDefault(); // отменить действие по умолчанию
  if (validate()) {
    // submit AJAX - отправить форму, если валидная
    form.reset(); // очистить все поля
  } else {
    alert("Fix empty fields");
  }
}

function validate() {
  let isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "currentColor";
    }
  });
  return isValid;
}
