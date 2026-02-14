# 📌 Calculadora com Validação e Modularização em Node.js

---

## 📖 Descrição do Projeto
Este projeto consiste em uma **calculadora via terminal**, desenvolvida como atividade prática acadêmica com foco em **modularização e validação de dados no back-end utilizando Node.js**.

O sistema permite que o usuário informe dois números e escolha a operação matemática desejada (**SOMA, SUBTRAÇÃO, MULTIPLICACAO ou DIVISAO**), realizando validações antes da execução do cálculo, garantindo integridade e segurança dos dados.

---

## 🎯 Objetivo
Criar um sistema capaz de realizar operações matemáticas básicas, aplicando:

- Separação de responsabilidades  
- Validações de entrada  
- Organização modular do código  
- Boas práticas de desenvolvimento back-end  

---

## 🧮 Fórmula Utilizada
O sistema realiza operações matemáticas básicas utilizando operadores nativos do JavaScript:

Soma → `+`  
Subtração → `-`  
Multiplicação → `*`  
Divisão → `/`  

Todos os valores são convertidos para `Number()` antes da operação para garantir precisão nos cálculos.

---

## ⚙️ Funcionalidades
- Entrada de dois números via terminal  
- Escolha da operação matemática  
- Conversão automática de vírgula para ponto (`tratarVirgula`)  
- Execução modular com separação de arquivos  
- Processamento das operações via funções específicas  

---

## 🛡️ Validações Implementadas
O sistema realiza verificações para garantir:

- Bloqueio de campos vazios  
- Verificação de valores não numéricos (`isNaN`)  
- Conversão adequada de valores com vírgula  
- Padronização da operação com `.toUpperCase()`  
- Prevenção de divisão com zero  
- Segurança e consistência das informações inseridas  

---

## 📝 Padronização e Boas Práticas
O código segue um padrão de comentários no início do arquivo principal, contendo:

- Objetivo do programa  
- Data de criação  
- Autor  
- Versão do arquivo  

Além disso, o projeto foi organizado em módulos separados:

- `Tratamento/tratandoNome.js` → Responsável pelas validações  
- `Modulo/calculosMatematico.js` → Responsável pelos cálculos  

Esse padrão facilita a **manutenção**, **organização** e o **entendimento do código por outros desenvolvedores**, sendo reutilizado em projetos futuros.

---

## 🧠 Aprendizados
- Aplicação prática de modularização no Node.js  
- Uso do módulo `readline` para interação via terminal  
- Importância da validação antes do processamento  
- Tratamento de erros em aplicações CLI  
- Organização de código voltada a boas práticas de back-end  

---

## 🛠️ Tecnologias Utilizadas
- JavaScript  
- Node.js  
- Visual Studio Code  
- Execução via terminal  

---

## ▶️ Como Executar o Projeto
1. Clone este repositório  
2. Abra o projeto no Visual Studio Code  
3. Execute o arquivo principal pelo terminal  

Exemplo:

```bash
node app.js
