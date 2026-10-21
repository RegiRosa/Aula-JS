//const temperatura = 25;

//if (temperatura > 35 ) {
    //console.log("Esta calor!!")    
//}

//console.log("Fim do programa!")

//const idade = Number(prompt("Sua idade: "));

//essa funcao ve se é um numero o que o usuario me mandou (isNaN)
/*if (Number.isNaN(idade) || idade < 0) {
    console.log("Idade invalida!");
} else {
    if(idade >= 18){
        console.log("Maior  de idade");
    } else {
        console.log("Menor de idade");
    }
}*/

//else if (multiplos caminhos)
/*const temp = Number(prompt("Temperatura atual (C):"));

//temp nao e um numero?
if (Number.isNaN(temp)) {
    console.log("Valor invalido!");
} else if (temp < 0) {
    console.log("Muito frio!!")
} else if (temp <= 20) {
    console.log("frio!!")
} else if (temp <= 30) {
    console.log("Agradavel!!")
} else {
    console.log("Quente!!")
}
*/
/*const nota = 95;

if (nota >= 60) {
    console.log("Aprovado");
} else if (nota >= 90) {
    console.log("Excelente");
}*/

//Operadores Logicos && (E), || (ou)

/*const temCarteira = true;
const temCartao = false;

console.log(temCarteira && temCartao);
console.log(temCarteira || temCartao);
console.log(!temCartao);*/

/*const dinheiro = Number(prompt("Dinheiro na carteira:"));
//quando coloco um number na frente, ja transformo a string em numero
const temCartao = (prompt("Tem cartao? (s/n)")) === "s";

if ((dinheiro >= 10 || temCartao) && dinheiro >=0) {
    console.log("Voce consegue comprar o lanche.");
} else {
    console.log("Nao vai rolar agora.");
}*/

//Operador Ternario
/*const idade = 20;

const situacao = idade >= 18 ? "maior" : "menor";

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log("Voce e menor!")
}*/

//Switch
/*const dia = prompt("dia da semana ( seg, ter, qua, ..):");

switch (dia) {
       case "seg":
    case "ter":
    case "qua":
    case "qui":
    case "sex":
            console.log("Dia util");
    break;
    case "sab":
    case "dom":
        console.log("Fim de semana");
break
    default:
        console.log("Dia invalido")
}*/