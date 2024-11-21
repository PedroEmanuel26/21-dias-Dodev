const comFome = prompt("Você está com fome? (sim/não)")
const temDinheiro = prompt("Você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("O restaurente se encontra aberto? (sim/não)")

if (comFome === "não" || temDinheiro == "não") {
    console.log("Hoje a janta será em casa");
} else if (temDinheiro === "sim" && restauranteAberto === "sim") {
    console.log("Hoje o jantar será no seu restaurante favorito");
} else {
    console.log("Peça um delivery!");
}