//Exercício 1
let numero = parseInt(prompt("Digite um número inteiro e positivo"))

//Loop for
for (let i = 0; i <= numero; i++) {
    console.log(i);
}

//Exercício 2
for (let i = 0; i <= 50; i += 5) {
    console.log(i);
}

//Exercício 3
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}

//Exercício 4 
let number = parseInt(prompt("Digite um número inteiero e positivo"))
for (let i = number; i <= number + 2; i++) {
    console.log("Tabuada do número: " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j))
    }
}