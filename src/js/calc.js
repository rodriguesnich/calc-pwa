function calc() {
	vetor.forEach(function(nome){
    resuBuffer += `${nome} `
    })

    resuBuffer = math.evaluate(resuBuffer)

    return displayResu(resuBuffer)
}
