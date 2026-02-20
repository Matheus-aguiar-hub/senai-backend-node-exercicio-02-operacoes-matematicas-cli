//Fazendo o desmembramento das funções de acordo com o calculo usado
function calculaSoma(primeiroNumero, segundoNumero) {
    return Number(primeiroNumero) + Number(segundoNumero)
}

function calcularSubtracao(primeiroNumero, segundoNumero) {
    return Number(primeiroNumero) - Number(segundoNumero)
}

function calcularMultiplicacao(primeiroNumero, segundoNumero) {
    return Number(primeiroNumero) * Number(segundoNumero)
}

function calcularDivisao(primeiroNumero, segundoNumero) {
    return Number(primeiroNumero) / Number(segundoNumero)
}

module.exports = {
    calculaSoma,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
}