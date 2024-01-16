document.getElementById("myBtn").addEventListener("click", showSpoiler);
const spoiler = document.getElementById("spoiler");

function showSpoiler() {
  spoiler.classList.toggle("closed");
  addEventListener("keydown", handleEvent);
  if (spoiler.classList.contains("closed")) {
    removeEventListener("keydown", handleEvent);
  }
}

function handleEvent(event) {
  if (event.key === "Escape") {
    spoiler.classList.toggle("closed");
    removeEventListener("keydown", handleEvent);
  }
}
