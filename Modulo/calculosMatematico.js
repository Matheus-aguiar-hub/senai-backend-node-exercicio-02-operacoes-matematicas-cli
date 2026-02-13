function calcularOperacaoMatematica (primeiroNumero, segundoNumero, operacaoMatematica){

    let calcularPrimeiro   = Number(primeiroNumero)
    let calcularSegundo    = Number(segundoNumero)
    let calcularOperacao   = String(operacaoMatematica)

    if(calcularOperacao == 'SOMA' ){
        let calculoSoma = Number(calcularPrimeiro) + Number(calcularSegundo)
        console.log('a SOMA é: ' + calculoSoma)
    }else if(calcularOperacao == 'SUBTRACAO'){
        let calculoSubtracao = Number(calcularPrimeiro) - Number(calcularSegundo)
        console.log('a SUBTRACAO é: ' + calculoSubtracao)
    }else if(calcularOperacao == 'MULTIPLICAÇÃO'){
        let calculoMultiplicacao = Number(calcularPrimeiro) * Number(calcularSegundo)
        console.log('a MULTIPLICAÇÃO é: ' + calculoMultiplicacao)
    }else if(calcularOperacao == 'DIVISÃO'){
        let calculoDivisao = Number(calcularPrimeiro) / Number(calcularSegundo)
        console.log('a DIVISÃO é: ' + calculoDivisao)
    }
}

module.exports = {
    calcularOperacaoMatematica
}