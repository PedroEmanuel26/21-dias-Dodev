//Declaracao de vaiaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0 

//Preenchimento de informações pelo usuario e atribuir valores das variaveis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digte sua idade: "))
altura = parseFloat(prompt("Dgigite sua alura: "))
peso = parseInt(prompt("Digite seu peso: "))

//Calculando o ano de nascimento e seu IMC
let anoNasc = 0 
anoNasc = 2024 - idade

let imc = 0 
imc = peso / (altura * altura)

//Exibir informações para o usuário
console.log("Olá " + nome + ",você tem " + idade + " anos, nasceu em " + anoNasc + " tem, " + altura + " de altura, pesa " + peso + "Kg eseu IMC é " + imc + "kg/m²")