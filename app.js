document.querySelector("button").addEventListener("click", handleClick);
document.querySelector("section").addEventListener("click", handleClick);
document.querySelector("div").addEventListener("click", handleClick);

// если кликнуть кнопку, событие произойдет не только на кнопке
// но и на div и на section
function handleClick(event) {
  // event.stopPropagation(); // прекратить всплытие
  console.log(event);
  console.log(event.target);
  console.log(this); // равно event.currentTarget
}
