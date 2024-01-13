const registeredUsers = [
  ["admin", "KoI18"],
  ["manager", "SuperMe108"],
  ["editor", "12345"],
];

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const login = document.querySelector("[name=login]");
const password = document.querySelector("[name=password]");

inputs.forEach((input) => input.addEventListener("keypress", handleEvent));

function handleEvent(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.nextElementSibling.focus();
  }
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (validate()) {
    alert("Access granted");
    console.log("Access granted");
    form.reset();
  }
}

function validate() {
  if (!(login.value.trim() && password.value.trim())) {
    alert("All fields are required");
    console.log("All fields are required");
    return false;
  }
  for (let user of registeredUsers) {
    console.log(login.value, user[0]);
    console.log(password.value, user[1]);
    if (login.value === user[0] && password.value === user[1]) {
      return true;
    }
  }
  alert("Incorrect login or password");
  console.log("Incorrect login or password");
  return false;
}
