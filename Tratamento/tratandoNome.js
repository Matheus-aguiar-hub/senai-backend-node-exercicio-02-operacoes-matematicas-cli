function tratarNumero(primeiro, segundo, operacao) {
    //Tratando caso o usuário digite nada
    if (primeiro == '' || segundo == '' || operacao == '') {
        return false
    //Tratando caso o usuário digite letras
    } else if (isNaN(primeiro) || isNaN(segundo)) {
        return false
    } else {
        return true
    }
}
//Tratando caso o usuário digite letras
function tratarDivisao(primeiro, segundo) {
    if (primeiro == 0 && segundo == 0) {
        return false
    } else {
        return true
    }
}

//Tratamento da virgula para ponto
function tratarVirgula(valor){
    return Number(valor.replace(',', '.'))
}

module.exports = {
    tratarNumero,
    tratarDivisao,
    tratarVirgula
}
