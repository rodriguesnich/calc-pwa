
// BUFFERS
var numBuffer = ''
var screenBuffer = ''
var resuBuffer = ''
// ARRAY
var vetor = []

var a = ''


// DISPLAY
function display() {
    const screen = document.getElementById('math')

    if (vetor.length < 30) {
        vetor.forEach(function(nome){
            screenBuffer += `${nome} `
        })
        screen.innerHTML = `${screenBuffer}`
    } else {
        window.alert('número máximo de operações atingido');
    }

    screenBuffer = ''
}


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

function pressOperator(opt) {
    vetor.push(opt)
    numBuffer = ''

    return display()
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


// RESULTADO
function  calc() {
    vetor.forEach(function(nome){
        resuBuffer += `${nome} `
    })

    resuBuffer = math.evaluate(resuBuffer)

    return displayResu(resuBuffer)
}

function displayResu(result) {
    const screen = document.getElementById('result')

    a = result.toString().length

    if (a > 11) {
        screen.innerHTML = `${(result / 10**a).toFixed(4)}e${(a)}`

    } else if (a > 11 && result < 1) {
        screen.innerHTML = result.toFixed(5)

    } else {
        screen.innerHTML = result
    }
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
