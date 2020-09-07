
// BUFFERS
var buffer = ''

// Objeto Conta
const conta = {};

let value = '';

function fn(oldValue, newValue) {
  // console.log(`${oldValue} has been changed to ${newValue}`);
  displayConta()
}

Object.defineProperty(conta, "prop", {
  get() {
    return value
  },
  set(val) {
    value = val;
    fn(value, val);
  }
});

//  BOTOES
function press(pressed) {
  console.log(isNaN(pressed));
  if (isNaN(pressed)) {
    console.log('ñ é numero');
  } else {
    console.log('é numero');
  }
  buffer += pressed
  conta.prop = buffer
}

// LIMPADOR
function clean() {
  buffer = ''
  conta.prop = buffer
}

function softClean() {
  buffer = buffer.substring(0, buffer.length - 1);
  conta.prop = buffer
  displayConta()
}
