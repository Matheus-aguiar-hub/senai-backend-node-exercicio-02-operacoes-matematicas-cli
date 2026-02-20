/*************************************************************************
* Objetivo: Fazendo operações matématicas em arquivos separados de tratamento e calculo
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
    let primeiroNumero = tratando.tratarVirgula(primeiro)

    entradaDados.question('Insira o segundo número: ', function(segundo){
        let segundoNumero = tratando.tratarVirgula(segundo)

        entradaDados.question('Insira qual a operação matématica que deseja calcular: ', function(operacao){
           let operacaoMatematica = operacao.toUpperCase()

            if (!tratando.tratarNumero(primeiroNumero, segundoNumero, operacaoMatematica)) {
            console.log("Erro: informe os valores de forma válida (QUE TENHA NÚMEROS 10,10 ou 10.10) !")
            entradaDados.close()
            return
            }

            if(operacaoMatematica == 'SOMA' || operacaoMatematica == 'SOMAR'){
            console.log("A somatória dos dois números é: ", calculos.calculaSoma(primeiroNumero, segundoNumero).toFixed(2))
            entradaDados.close()
            }
            else if(operacaoMatematica == 'SUBTRAÇÃO' || operacaoMatematica == 'SUBTRACÃO' || operacaoMatematica == 'SUBTRACAO'){
            console.log("A subtração dos dois números é: ", calculos.calcularSubtracao(primeiroNumero, segundoNumero).toFixed(2))
            entradaDados.close()
            }
            else if(operacaoMatematica == 'MULTIPLICAÇÃO' || operacaoMatematica == 'MULTIPLICACÃO' || operacaoMatematica == 'MULTIPLICACAO'){
            console.log("A multiplicação dos dois números é: ", calculos.calcularMultiplicacao(primeiroNumero, segundoNumero).toFixed(2))
            entradaDados.close()
            }
            else if(operacaoMatematica == 'DIVISÃO' || operacaoMatematica == 'DIVISÃO'  ){
                console.log("A divisão dos dois números é: ", calculos.calcularDivisao(primeiroNumero, segundoNumero))
                    
                    if(!tratando.tratarDivisao(primeiroNumero, segundoNumero)){
                    console.log("Erro: não é permitido (DIVISÃO POR 0).")
                    entradaDados.close()
                    return
                }
            }
            else{
            entradaDados.close()
            }
        })
    })
})