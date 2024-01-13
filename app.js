const btn = document.querySelector("button");
const input = document.querySelector("input");

// btn.addEventListener("click", handleEvent);
input.addEventListener("keypress", handleEvent);

function handleEvent(event) {
  console.log(event);
  console.dir(event.target); // элемент, на котором произошло событие

  if (event.key === "Enter") {
    //если нажмем на enter, переместим фокус на следующего соседа
    event.target.nextElementSibling.focus();
  }
}
