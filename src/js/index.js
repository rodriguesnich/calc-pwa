
// BUFFERS
var buffer = ''
var opt = true

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
    // ñ é numero
    if (opt) {
      // se teve operador antes
      let last = buffer.slice(buffer.length - 1)
      if (pressed == "(" || pressed == ")" || pressed == "-") {
        if (last != ")" || last != "-") {
          return
        } else {
          buffer += pressed
          conta.prop = buffer
          return
        }
      }
      if (conta.prop.slice(conta.prop.length - 1) == ")") {
        buffer += pressed
        conta.prop = buffer
        return
      }
      return
    } else {
      // se não teve operador antes
      buffer += pressed
      conta.prop = buffer
      opt = true
      return
    }
  } else {
    // é numero
    buffer += pressed
    conta.prop = buffer
    opt=false
  }
}

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
