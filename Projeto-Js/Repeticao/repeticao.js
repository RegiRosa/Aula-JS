//Arrays - Lista de valores com indice

/*const frutas = ["Maca", "Banana", "Laranja"];

console.log(frutas[0]); //comeca sempre com 0
console.log(frutas[2]);
console.log(frutas.length);

frutas.push("Uva");
console.log(frutas);

//Objetos - conjunto de chave e valor
const pessoa = [
    {nome: "Lucas", idade: 35, cidade: "Sao Paulo"}
]

console.log(pessoa.nome); 
pessoa.cidade = "Sao Paulo"*/

/*let i = 1; // sempre no while eu tenho que criar uma constante com "i" que e um contador

while (i <= 5) {
    console.log("Numero: " + i);
    i++ // significa que estou somando 1+1 continua, 2+1 continua, 3+1 continua, 4+1 continua, 5+1 para porque o resultado 
    // da 6 que e maior q 5

}*/

//do.. while - vem o du antes do while

/*let senha; 

do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");*/

//For
/*for (let i = 1; i <= 10; i++) {// inicio da contagem let i = 1(quantidade de laco, ele altera cada laco);, a condicao i <=10; 
// e o incremento i++{
    console.log(`7 x ${i} = ${7 * i}`);
}*/

// Contagem regressiva
/*for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Fogo!!")*/

//Acumulador: somando dentro do loop

/*let soma = 0;

for (let i = 1; i <=5; i++) {
   

    soma += i //ou soma = soma + i
}

console.log(soma); -- Perguntar como ele chegou no resultado de 15 ao rodar*/

//for..of
/*const frutas = ["Maca", "Banana", "Laranja"]; //Entra no array de "frutas" e guarda na variavel const fruta"
for (const fruta of frutas) {
    console.log("Frutas:", fruta);
}*/