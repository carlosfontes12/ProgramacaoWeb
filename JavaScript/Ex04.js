let soma = 0;

//imprime os números de 1 a 10
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
}

console.log("Numeros Pares:");

//imprime os números pares de 1 a 10
for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

//imprime a soma dos números de 1 a 5
for (let numero = 1; numero <= 5; numero++) {
    soma += numero;


}
//resultado da soma dos números de 1 a 5
console.log("Soma: " + soma);