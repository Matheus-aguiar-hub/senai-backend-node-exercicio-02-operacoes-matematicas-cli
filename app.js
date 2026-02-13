/*************************************************************************
* Objetivo: 
* Data: 13/02/2026
* Autor: Matheus aguiar
* Versão 1.0
*/

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
            
            let tratarNumeroMath = require('./Tratamento/tratandoNome.js')
            let tratandoNumero = tratarNumeroMath.tratarNumeroMatematico(primeiroNumero, segundoNumero)
       
            let calcularOperacaoMatematica = require('./Modulo/calculosMatematico.js')
            let calculandoOperacao = calcularOperacaoMatematica.calcularOperacaoMatematica(primeiroNumero, segundoNumero, operacaoMatematica)
        
            
        })
    })
})