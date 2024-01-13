const buttons = document.querySelectorAll("button");

function numberOfClicks(event) {
  let clicks = event.target.dataset.clicked++;
  console.log(`${event.target.id} click ${clicks + 1}`);
}

buttons.forEach((button) => button.addEventListener("click", numberOfClicks));
