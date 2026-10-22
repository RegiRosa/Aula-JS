//Peca a cor do semaforo ("verde", "amarelo", "vermelho") e diga a acao
//Exemplo: verde - siga. 


/*const semaforo = prompt("Digite a cor do semaforo ( verde, amarelo, vermelho):");

if (semaforo === "verde") {
    console.log("Prossiga.");
}
if (semaforo === "amarelo") {
    console.log("Preste atencao.");
} 
if (semaforo === "vermelho") {
    console.log("Pare.");
} else {
    console.log("cor invalida!")
}*/


//Nota
/*const nota = Number(prompt("Digite sua nota:"));
if (nota >= 80) {
    console.log("Aprovado!");
}
if (nota >= 60 ) {
    console.log("Recuperacao.");
} 
if (nota <60) {
    console.log("Reprovado");
} else {
    console.log("Nota invalida")
}*/

//Outra formaaaaaaaaa
/*const nota = Number(prompt("Nota (0-100):"));

if (Number.isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Nota inválida.");
} else if (nota < 60) {
    console.log("Reprovada!");
} else if (nota < 80) {
    console.log("Recuperação!");
} else {
    console.log("Aprovado!");
}*/

/*Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`*/

/*const user = prompt("Informe sua funcao: (adm ou gerente)");
const pass = prompt("Informe sua senha: ");

const perfilok = (user === "admin" || user === "gerente");
const senhaok = (pass === "1234");

if (perfilok && senhaok) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado")
}*/


//1) 
/*const Class_de_num = Number(prompt("Informe um numero: "));

if (Number.isNaN(num) ) {
    console.log("valor inválido.");
} else if ( Class_de_num > 0) {
    console.log("O numero é positivo.");
} else if (Class_de_num < 0) {
    console.log("O numero é negativo!");
} else if (Class_de_num === 0) {
    console.log("O numero é zero!");
} else {
    console.log("Numero invalido!"); } */

//2) 
/*const idade = Number(prompt("Informe sua idade: "));

if (Number.isNaN(idade) || idade < 0) {
    console.log("Idade invalida!");
} else if (idade >= 18) {
        console.log("Voce pode tirar a carteira de motorista");
    } else {
        console.log("Você ainda não tem idade para dirigir.");
    }*/

//3
/*const num = Number(prompt("Informe um numero: "));

if (Number.isNaN(num) ) {
    console.log("Numero invalido!");
} else if (num % 2 === 0) {
        console.log("Esse numero é par");
    } else {
        console.log("Esse numero é impar");
    }*/

//4

/*const peso = Number(prompt("Digite seu peso (kg):"));
const altura = Number(prompt("Altura (m):"));

if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Numero invalido!");
} else {  
    const imc = peso / (altura ** 2);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log ("Classificacao: Abaixo do peso");
    } else if (imc < 25) {
        console.log ("Classificacao: Peso normal");
    } else if (imc < 30) {
        console.log ("Classificacao: Sobrepeso");
    } else {
        console.log ("Classificacao: Obesidade");
    }

}*/

/*const compra = Number(prompt("Informe o valor de sua compra: (R$):"));

if (Number.isNaN (compra) || compra  < 0 ) {
    console.log("Informacao invalida!");
} else if (compra > 100 ) {
    const desconto = compra * 0.1;
    console.log("Valor final com desconto: R$ " + valor - desconto);
} else {
    console.log("Valor final: R$ " + valor)
}*/

//Peça 3 números e diga qual é o maior.
//**Exemplo:** `4`, `9` e `7` → `O maior número é: 9`



/*const n1 = Number(prompt("Informe o primeiro numero: "));
const n2 = Number(prompt("Informe o segundo numero: "));
const n3 = Number(prompt("Informe o terceiro numero: "));

if (Number.isNaN (n1) || Number.isNaN (n2) || Number.isNaN (n3)) {
    
} else if (n1 > n2 && n1 > n3) {
     console.log(`${n1} é maior!`)
} else if (n2 > n3 && n2 > n1) {
     console.log(`${n2} é maior!`)
} else {
    console.log(`${n3} é maior`)
}

// Outra forma de fazer

const a = Number(prompt("Digite o primeiro número: "));
const b = Number(prompt("Digite o segundo número:"));
const c = Number(prompt("Digite o terceiro número:"));

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
      console.log("Números inválidos.");
} else {
    let maior = a;
    if (b > maior) maior = b;
    if (c > maior) maior = c;
    console.log("O maior número é: " + maior);
}*/
