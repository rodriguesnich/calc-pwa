// BUFFERS
var buffer = ''
var parent = false

// Objeto Conta
const conta = {}
let value = ''
function fn(oldValue, newValue) {
  displayConta()
}

Object.defineProperty(conta, "prop", {
  get() {
    return value
  },
  set(val) {
    value = val
    fn(value, val)
  }
});

function pressNumber(number) {
  buffer += number
  conta.prop = buffer
}

function pressOpt(operator) {
  let last = buffer.slice(buffer.length - 1)
  if (isNaN(last) === false) {
    buffer += operator
    conta.prop = buffer
  }
}

function pressParent(par) {
  let last = buffer.slice(buffer.length - 1)
  if (parent === false) {
    buffer += '('
    conta.prop = buffer
    parent = true
  } else {
    buffer += ')'
    conta.prop = buffer
    parent = false
  }
}

// function pressMinus() {
//
// }

// LIMPADOR
function clean() {
  buffer = ''
  result = ''
  conta.prop = buffer
  displayResu()
}

function softClean() {
  buffer = buffer.substring(0, buffer.length - 1);
  conta.prop = buffer
  displayConta()
}
