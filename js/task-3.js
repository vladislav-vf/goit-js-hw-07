const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const trimValue = input.value.trim();
  output.textContent = trimValue === "" ? "Anonymous" : trimValue;
});