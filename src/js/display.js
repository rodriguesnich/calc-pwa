
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
