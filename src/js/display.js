var a = ''


function displayConta() {
    const screen = document.getElementById('math')

    screen.innerHTML = `${getConta()}`

    conta =''
}

function displayResu() {
    const screen = document.getElementById('result')

    a = getResult().toString().length

    if (a > 11) {
        screen.innerHTML = `${(result / 10**a).toFixed(4)}e${(a)}`

    } else if (a > 11 && result < 1) {
        screen.innerHTML = result.toFixed(5)

    } else {
        screen.innerHTML = result
    }
}
