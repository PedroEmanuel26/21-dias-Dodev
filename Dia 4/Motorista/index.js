//Variáveis
let nome
let idade
let temCarta = false
let temCarro = false 

//Informações do Usuário
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if (opcaoCarta == "s") {
    temCarta = true
}
let opcaoCarro = prompt("Você tem carro? (s/n)") 
    if (opcaoCarro == "s"){
        temCarro = true
}

//Mensagem no Console
if (idade <18 || temCarta) {
    console.log(nome + ", você não pode dirigir")
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log(idade + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista!")
}