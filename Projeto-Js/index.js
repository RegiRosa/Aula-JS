//Linguagem Interpretada
//NodeJs
//Tipagem fraca

/**
 * let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá, mundo";
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";
let resultado = numero + texto;

console.log(resultado);
 * 
 */

//variavel
//let
//const
//var

//let // palavra que vai criar a variavel

/*let idade = 35;
//idade nome (etiqueta)
//= (atribuicao)

//35 valor

/*
let nome = "Lucas";
let idade1 = 35;

console.log(nome);
console.log(idade1);
console.log(idade1 + 1);
console.log("Ola, " + nome + "!");

idade1 = 30; 

const idade2 = 35;
idade2 = 30;*/

//case sensitive

/*let nome = "Lucas";
let Nome = "Maria";
let NOME = "Joao";
console.log(nome)
console.log(Nome)
console.log(NOME)*/

//Palavras Reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch, case.

//Regras de Nomenclatura

//Pode comecar com letra, _ ou $
//Pode conter: numeros, letras, _ ou $

/*
let idade = 20
idade = 21;
 console.log(idade);

 const PI = 3.14159;

const total = 150;

if (total > 100) {
    var desconto = 10;
    let frete = 0;
}

console.log(frete)*/

//Tipos Primitivos
/*const preco = 19.9;
console.log(typeof preco);

const nome = "Lucas;"
console.log(typeof nome);

const ativo = true;
console.log(typeof ativo);

const vazio = null;
console.log(typeof vazio);

let indefinido;
console.log(typeof indefinido);*/

//Stings e Template Literals

/*const nome1 = "Lucas";
const nome2 = 'Maria';
const nome3 = `Joao`;
const idade = 40;

const nomeCompleto = "Regiane Rosa";

//length = comprimento
console.log(nomeCompleto.length)

//toUpperCase (maiuscula) é uma funcao, so da para rodar se colocar parenteses
console.log(nomeCompleto.toUpperCase())

//toLowerCase(minusculo)
console.log(nomeCompleto.toLowerCase())

//${} esses dois chama a variavel
console.log(`Ola, meu nome é ${nomeCompleto} e tenho ${idade}.`)*/

//Conversoes de Tipo

//converter string para numero
console.log(Number("123"));

//converter para numero inteiro
console.log(parseInt("10.9"));

//converter para numero quebrado
console.log(parseFloat("10.9"));

//converter para string
console.log(String("123"));

//falso
console.log(Boolean(0));

//verdadeiro
console.log(Boolean(1));

//falso
console.log(Boolean(""));

//peco um prompt p o usuario p rodar no navegador
//const texto1 = prompt("Digite um numero")
//console.log(texto + 5)

//const texto = Number(prompt("Digite um numero"));
//console.log(texto + 5)

//arredondamento e formatando numeros

//const preco = 10.987;

//para colocar qtas casas decimais quero, mas tenho que colocar () depois
//console.log(preco.toFixed(2));

//arredondar para mais proximo
//console.log(Math.round(preco));

//arredondar para baixo
//console.log(Math.floor(preco));

//arredondar para cima
//console.log(Math.ceil(preco));

//Operadores Aritmeticos

//console.log(2 - 3);
//console.log(5 - 2);
//console.log(4 * 2);
//console.log(10 / 2);
//console.log(10 % 3);
//console.log(2 ** 3); //potencia

//Operadores de comparacao
//console.log(5 == "5"); // igual frouxo
//console.log(5 == 5); // igual frouxo

//console.log(5 === "5"); //igual estrito
//console.log(5 === 5); //igual estrito

//console.log(5 != "5"); //diferente frouxo - diferente
//console.log(5 != 7); //diferente frouxo

//console.log(5 !== "5"); //diferente estrito
//console.log(5 !== 7); //diferente estrito

//Media de duas notas
//const n1 = Number(prompt("Primeira nota:"));
//const n2 = Number(prompt("Primeira nota:"));

//const media = (n1 + n2) / 2;

//quero minha resposta com 1 casa decimal
//console.log(`Media: ${media.toFixed(1)}`);

//IMC (Indice de massa Corporal)
//const peso = Number(prompt("Digite seu peso (kg):"));
//const altura = Number(prompt("Altura (m):"));

//sempre criar uma variavel para guardar o calculo
//const IMC = peso / (altura ** 2);

//console.log(`IMC: ${IMC.toFixed(2)}`);

//aparece direto no prompt
//alert(`IMC: ${IMC.toFixed(2)}`);
