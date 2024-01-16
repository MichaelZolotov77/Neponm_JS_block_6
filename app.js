document.getElementById("myBtn").addEventListener("click", toggleSpoiler);

function toggleSpoiler(event) {
  event.preventDefault();
  const spoiler = document.getElementById("spoiler");
  spoiler.classList.toggle("closed");
  if (spoiler.classList.contains("closed")) {
    detachSpoilerEvents();
  } else {
    attachSpoilerEvents();
  }
}

function attachSpoilerEvents() {
  document.addEventListener("keydown", handleEscape);
}

function detachSpoilerEvents() {
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(event) {
  console.log(event.key);

  if (event.key === "Escape") toggleSpoiler();
}
