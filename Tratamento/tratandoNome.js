function tratarNumero(primeiro, segundo, operacao) {
    if (primeiro == '' || segundo == '' || operacao == '') {
        return false
    } else if (isNaN(primeiro) || isNaN(segundo)) {
        return false
    } else {
        return true
    }
}

function tratarDivisao(primeiro, segundo) {
    if (primeiro == 0 && segundo == 0) {
        return false
    } else {
        return true
    }
}

function tratarVirgula(valor){
    return Number(valor.replace(',', '.'))
}

module.exports = {
    tratarNumero,
    tratarDivisao,
    tratarVirgula
}
