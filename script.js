document.addEventListener("DOMContentLoaded", function () {
  const screen = document.querySelector(".calculator-screen");
  const buttons = document.querySelectorAll(".grid-buttons button");
  const allClear = document.querySelector(".all-clear");
  const equalTo = document.querySelector(".equal-sign");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const value = e.target.value;
      screen.value += value;
    });
  });

  allClear.addEventListener("click", function () {
    screen.value = "";
  });

  equalTo.addEventListener("click", function () {
    if (screen.value == "") {
      screen.value = "please enter";
    }
    const result = eval(screen.value);
    screen.value = result;
  });
});
