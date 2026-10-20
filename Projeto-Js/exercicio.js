//saudacao personalizada
//const nome = prompt("Ola qual eu nome?");

//alert(`Ola, seja bem vida ${nome}!`);

//Leia dois numeros, some e mostr com 2 casas decimais.
//**Exemplo **/entradas `10`e `5.5` - saida `a soma e 15.50`

//const a = Number(prompt("Primeiro numero:"));
//const b = Number(prompt("Segundo numero:"));
//const soma = a + b;
//console.log(soma.toFixed(2));

//Exemplo: entrada `254` - saida 254 cm = 100.00
//const Number = 254;
//const number1 = 100.00;

//const divisao = 254 / 100.00;
//console.log(divisao.toFixed(2));

//ou
//const Number3 = Number(prompt("centimetros"));
//const polegadas = cm / 2.54;
//const divisao2 = 254 / 100.00;
//console.log(`${cm}`); ***falta aqui

//Entrada 20 - 240 meses, 7300 dias, 175200 horas e 10512000 minutos
const anos = Number(prompt("Digite sua idade em anos"));

const meses = anos * 12;
const dias = anos * 365;
const horas = anos * 24;
const minutos = horas * 60;

console.log(`Idade informada: ${anos} anos:`)
console.log(`Idade informada: ${meses} meses:`)
console.log(`Idade informada: ${dias} dias:`)
console.log(`Idade informada: ${horas} horas:`)
console.log(`Idade informada: ${minutos} minutos:`)



