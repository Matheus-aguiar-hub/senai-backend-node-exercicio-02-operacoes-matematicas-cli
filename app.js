/*************************************************************************
* Objetivo: 
* Data: 13/02/2026
* Autor: Matheus aguiar
* Versão 1.0
*/

let tratando = require('./Tratamento/tratandoNome.js')
let calculos = require('./Modulo/calculosMatematico.js')

const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira o primeiro número: ', function(primeiro){
    let primeiroNumero = primeiro

    entradaDados.question('Insira o segundo número: ', function(segundo){
        let segundoNumero = segundo

        entradaDados.question('Insira qual a operação matématica que deseja calcular: ', function(operacao){
            let operacaoMatematica = operacao

            if(operacaoMatematica == 'SOMA'){
            console.log("A somatória dos dois números é: ", calculos.calcularOperacaoMatematicaSoma(primeiroNumero, segundoNumero))
            }
            else if(operacaoMatematica == 'SUBTRAÇÃO'){
            console.log("A subtração dos dois números é: ", calculos.calcularOperacaoMatematicaSubtracao(primeiroNumero, segundoNumero))
            }
            else if(operacaoMatematica == 'MULTIPLICACAO'){
                console.log("A multiplicação dos dois números é: ", calculos.calcularOperacaoMatematicaMultiplicacao(primeiroNumero, segundoNumero))
            }
            else if(operacaoMatematica == 'DIVISAO'){
                console.log("A divisão dos dois números é: ", calculos.calcularOperacaoMatematicaDivisao(primeiroNumero, segundoNumero))
            }

        })
    })
})