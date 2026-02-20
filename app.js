/*************************************************************************
* Objetivo: Fazendo operações matématicas em arquivos separados de tratamento e calculo
* Data: 13/02/2026
* Autor: Matheus aguiar
* Versão 1.0
*/


//Importando biblioteca de tratamentos
let tratando = require('./Tratamento/tratandoNome.js')
//Importando biblioteca de tratamentos
let calculos = require('./Modulo/calculosMatematico.js')

const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//Primeira entrada de dados para o número que o usuário digite
entradaDados.question('Insira o primeiro número: ', function(primeiro){
    let primeiroNumero = tratando.tratarVirgula(primeiro)
    //Segunda entrada de dados para o número que o usuário digite
    entradaDados.question('Insira o segundo número: ', function(segundo){
        let segundoNumero = tratando.tratarVirgula(segundo)
        //Entrada de dados que informa a operação matématica que o usuário quer
        entradaDados.question('Insira qual a operação matématica que deseja calcular: ', function(operacao){
           let operacaoMatematica = operacao.toUpperCase()
            //Tratamento de dados para os números nulos e que seja somente números 
            if (!tratando.tratarNumero(primeiroNumero, segundoNumero, operacaoMatematica)) {
            console.log("Erro: informe os valores de forma válida (QUE TENHA NÚMEROS 10,10 ou 10.10) SEM MAIS DE UMA VIRGULA OU PONTO !")
            entradaDados.close()
            return
            }
            //Fazendo a interface gráfica para mostrar as somas de acordo com o que o usuário quer
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
                    //Tratamento para o usuário não ter permissão de dividir por 0
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