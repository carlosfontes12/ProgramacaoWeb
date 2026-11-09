/*
// declarar a funçao
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// calcular a média de duas notas e chamar a funçao
const media = calcularMedia(14, 18);

// imprimir o resultado da média
console.log("Média: " + media);*/


// funçao que verifica se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// funçao que calcula o desconto de um preço
function calcularDesconto(preco, desconto) {
    return desconto / 100 * preco;

}
// funçao que calcula o preço final após o desconto
function preçoFinal(preco, desconto) {
    return preco - calcularDesconto(preco, desconto);
}

// Apresentar os resultados dos cálculos e verificações
console.log(8 +" É par? " + ehPar(8));
console.log(7 +" É par? " + ehPar(7));
console.log(" ");
console.log("Desconto: " + calcularDesconto(100, 10));
console.log("Desconto: " + calcularDesconto(200, 20));
console.log(" ");
console.log("Preço final: " + preçoFinal(100, 10));
console.log("Preço final: " + preçoFinal(200, 20));