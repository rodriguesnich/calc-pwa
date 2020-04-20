
// BUFFERS
var numBuffer = ''
var screenBuffer = ''
var resuBuffer = ''
// ARRAY
var vetor = []

var a = ''



//  BOTOES
function pressNum(number) {
    if (isNaN(vetor[vetor.length-1]) && vetor[vetor.length-1] == ')') {
        pressOperator('*')
        numBuffer = ''
        vetor.push(number)
        numBuffer = number
    } else if (isNaN(vetor[vetor.length-1])) {
        numBuffer = ''
        vetor.push(number)
        numBuffer = number
    } else {
        numBuffer += number
        vetor[vetor.length-1] = numBuffer
    }
    return display()
}

function plusMinus(){
    if (isNaN(vetor[vetor.length-1])) {

    }   else {
        let a = Number(numBuffer) * -1
        vetor[vetor.length-1] = a
        numBuffer = a

        return display()
    }
}

function pressOperator(opt) {
    if (isNaN(vetor[vetor.length-1]) && vetor[vetor.length-1] != ')') {
        vetor[vetor.length-1] = opt
        numBuffer = ''

        return display()        
    } else {
        vetor.push(opt)
        numBuffer = ''

        return display()
    }

}

function pressParent(paret) {
    if (paret == '(') {
        if (isNaN(vetor[vetor.length-1])) {
            vetor.push(paret)
        } else {
            vetor.push('*')
            vetor.push(paret)
        }
    } else {
        vetor.push(paret)
    }

    return display()
}

// LIMPADOR
function clean() {
    const math = document.getElementById('math').innerHTML=""
    const resu = document.getElementById('result').innerHTML=""

    vetor = []
    numBuffer = ''
    screenBuffer = ''
    resuBuffer = ''
}

function softClean() {
    vetor.pop()
    
    return display()
}
