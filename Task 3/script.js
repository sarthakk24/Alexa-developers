console.log("js working");

const calc = document.querySelector(".calculator");
const display = document.querySelector(".displayResult");

let operation = "0";

calc.addEventListener("click", (e) => {
  if (e.target.closest("button") === null) {
    return;
  }
  const target = e.target.closest("button");

  if (target.value === "clear") {
    operation = "0";
    display.innerHTML = "0";
  } else if (target.value === "=") {
    display.innerHTML = eval(operation);
    operation = eval(operation);
  } else {
    operation += target.value;
    display.innerHTML = operation;
  }
});
