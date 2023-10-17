const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Tu nombre, por favor:");
  button.textContent = `Player 1: ${name}`;
}
