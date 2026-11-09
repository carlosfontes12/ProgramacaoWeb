//let ehPar=6;

let numero = prompt("Digite uma nota: ");



if (numero >= 0 && numero <= 9) {
    console.log("Não aprovado");
} else if (numero >= 10 && numero <= 13) {
    console.log("Suficiente");
} else if (numero >= 14 && numero <= 17) {
    console.log("Bom");
} else if (numero >= 18 && numero <= 20) {
    console.log("Muito Bom");
}
if (numero < 0 || numero >= 21) {
    console.log("Nota invalida");
}
