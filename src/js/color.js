var state = false;

function colorSwitch() {
  state = !state;
  if (state === true) {
    const screen = document.querySelector(".screen")
    const input = document.querySelector(".input")
    screen.style.backgroundColor = "white"
    screen.style.color = "black"
    input.style.backgroundColor = "gray"
  } else {
    const screen = document.querySelector(".screen")
    const input = document.querySelector(".input")
    screen.style.backgroundColor = "#2c2e31"
    screen.style.color = "white"
    input.style.backgroundColor = "#1d1e20"
  }

};
