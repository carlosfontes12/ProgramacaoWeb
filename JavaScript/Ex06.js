// Declarar variáveis
const Nome = "Carlos";
let notaTeste = 17;
let notaProjeto = 18;

// Função para calcular a média
function calcularMedia(notaTeste, notaProjeto) {
    return (notaTeste + notaProjeto) / 2;
}
// Calcular a média do aluno
let media = calcularMedia(notaTeste, notaProjeto);

// Verificar se o aluno foi aprovado ou reprovado
if (media >= 10) {
    console.log(`${Nome} Aprovado!`);
} else {
    console.log(`${Nome} Reprovado!`);
}

// Exibir a média do aluno
console.log(`A média de ${Nome} é ${media}`);

console.log(" ");
console.log("Tabuada da média:");

//tabuada da média
for (let i = 1; i <= 10; i++) {
    // console.log(`${Math.floor(media)} x ${i} = ${Math.floor(media) * i}`);
    console.log(Math.floor(media) + " x " + i + " = " + (Math.floor(media) * i));
}
