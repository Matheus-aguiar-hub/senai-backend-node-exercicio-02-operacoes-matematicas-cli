    function calcularOperacaoMatematicaSoma(primeiroNumero, segundoNumero) {
        return Number(primeiroNumero) + Number(segundoNumero)
    }

    function calcularOperacaoMatematicaSubtracao(primeiroNumero, segundoNumero) {
        return Number(primeiroNumero) - Number(segundoNumero)
    }

    function calcularOperacaoMatematicaMultiplicacao(primeiroNumero, segundoNumero) {
        return Number(primeiroNumero) * Number(segundoNumero)
    }

    function calcularOperacaoMatematicaDivisao(primeiroNumero, segundoNumero) {
        return Number(primeiroNumero) / Number(segundoNumero)
    }


    module.exports = {
        calcularOperacaoMatematicaSoma,
        calcularOperacaoMatematicaSubtracao,
        calcularOperacaoMatematicaMultiplicacao,
        calcularOperacaoMatematicaDivisao
}