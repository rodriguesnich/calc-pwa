
// BUFFERS
var numBuffer = ''
var conta = ''
// ARRAY
var vetor = []



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
    return displayConta()
}

function plusMinus(){
    if (isNaN(vetor[vetor.length-1])) {

    }   else {
        let a = Number(numBuffer) * -1
        vetor[vetor.length-1] = a
        numBuffer = a

        return displayConta()
    }
}

function pressOperator(opt) {
    if (isNaN(vetor[vetor.length-1]) && vetor[vetor.length-1] != ')') {
        vetor[vetor.length-1] = opt
        numBuffer = ''

        return displayConta()        
    } else {
        vetor.push(opt)
        numBuffer = ''

        return displayConta()
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

    return displayConta()
}

// LIMPADOR
function clean() {
    const math = document.getElementById('math').innerHTML=""
    const resu = document.getElementById('result').innerHTML=""

    vetor = []
    numBuffer = ''
    conta = ''
    resuBuffer = ''
}

function softClean() {
    vetor.pop()
    
    return displayConta()
}

function getConta() {
    conta = ''

    if (vetor.length < 30) {
        vetor.forEach(function(nome){
            conta += `${nome} `
        })
    } else {
        window.alert('número máximo de operações atingido');
    }



    return conta
}