var state = false;

function colorSwitch() {
  state = !state;
  const screen = document.querySelector(".screen")
  const input = document.querySelector(".input")
  const img = document.querySelector(".toggle-img")
  if (state === true) {
    screen.style.backgroundColor = "white"
    screen.style.color = "black"
    input.style.backgroundColor = "gray"
    img.src = "src/img/noite.svg";
  } else {
    screen.style.backgroundColor = "#2c2e31"
    screen.style.color = "white"
    input.style.backgroundColor = "#1d1e20"
    img.src = "src/img/dom.svg";
  }

};
