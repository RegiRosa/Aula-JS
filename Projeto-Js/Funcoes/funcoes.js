// const precoA = 100;
// comsole.log("Preco final A:", precoA - precoA * 0.1);
// const precoB = 250;
// comsole.log("Preco final B:", precoA - precoB * 0.1);
// const precoC = 80;
// comsole.log("Preco final C:", precoA - precoC * 0.1);

// function aplicarDesconto(preco) {
//     return preco - preco * 0.1;
// }

//chamo a funcao e coloco o parenteses para colocar dentro o parametro
// console.log("Preco final A:", aplicarDesconto(100));
// console.log("Preco final B:", aplicarDesconto(250));
// console.log("Preco final C:", aplicarDesconto(80));

//crio a funcao
/*function saudar() {
    //imprimo a funcao
    console.log("Ola, bem vindo ao curso!");

}

// aqui estou chamando a funcao*/
// saudar("Lucas");

// function saudar(nome) {
//     console.log("Ola, " + nome + "!");
// }

// //trago a funcao e escrevo o parametro
// saudar("Lucas");

// function apresentar(nome, idade) {
//     console.log(`${nome} tem ${idade} anos.`);
// }

// apresentar("Lucas", 35);

// function cumprimentar(nome = "Visitante") {
//     console.log(`Bem-vindo, ${nome}`);
// }

// //posso passar um parametro ou deixar vazio que vira o parametro "visitante que coloquei em cima"
// cumprimentar("Lucas");
// cumprimentar();

// function somar(a, b) {
//     console.log(a + b);
// }

// somar(2, 3);
// somar(2);
// somar(2, 3, 4);

// function dobroMostra(n) {
//     console.log(n*2);
// }
// function dobroDevolve(n) {
//     return n* 2;
// }

// dobroMostra(5);

// //aqui nao mostra nada, so guarda
// dobroDevolve(5);

// // aqui guarda numa variavel
// const b = dobroDevolve(5);

// //o return sempre cancelara minha funcao quando o if(condicao) for verdadeira
// function classificar(idade) {
//     if (idade < 0) {
//         return"Idade Invalida"
//     }

//     if(idade >= 18) {
//         return "maior de idade"
//     }

//     return "Menor de idade"
// }

// console.log(classificar());
// console.log(classificar(-5));
// console.log(classificar(10));

// function estatisticas(a,b) {
//     return {
//         soma: a + b, 
//         media: (a +b) / 2,
//     };
// }

// const resultado = estatisticas(4, 10);
// console.log(resultado.soma);
// console.log(resultado.media);

// function ehPar(n) {
//     return n % 2 === 0;

// }

// //posso colocar uma funcao dentro da outra
// function descrever(n) {
//     return ehPar(n) ? "Par" : "Impar";
// }

// //esse numero 4 seria qualquer numero que entraria no (n)
// console.log(descrever(4));

//posso guardar uma funcao em uma variavel
const dobro = function (n) {
    return n * 2;
}

console.log(dobro(4));

function quadrado1(n) {
    return n * n;
};

const quadrado2 = function (n) {
    return n * n;
};

const quadrado3 = (n) => {
    return n * n;
};

const quadrado4 = n => n * n;

const somar = (a, b) => a + b;

const oi = () => "Oi!!";

const criarAluno = nome => ({nome: nome, ativo: true});
console.log(criarAluno("Lucas"));

