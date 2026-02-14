function tratarNumeroMatematico(primeiroNumero, segundoNumero, operacaoMatematica){
    let primeiro   = Number(primeiroNumero)
    let segundo    = Number(segundoNumero)
    let operacao   = operacaoMatematica

    if(primeiro == '' || segundo == '' || operacao == ''){
        return false
    } else if(isNaN(primeiro) || isNaN(segundo)) {
        return false
    }else{
        return true
    }
}

module.exports = {
    tratarNumeroMatematico
}
