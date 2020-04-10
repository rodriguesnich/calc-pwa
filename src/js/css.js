const but = document.getElementById('test')

but.ontouchstart = butDown;
but.ontouchend = butUp;

function butDown() {
    // console.log('Vc Apertou o Botão')
    but.style.background = "white"
    but.style.color = "black"
}

function butUp() {
    // console.log('Vc Soltou o Botão')
    but.style.background = "#555555"
    but.style.color = "white"
}
