if (typeof prompt === "undefined") {
    globalThis.prompt = require("prompt-sync") ();

}

const nome = prompt("Qual seu nome?");
const idade = Number(prompt("Qual sua idade?"));

console.log(`ola,${nome}! Daqui a 10 anos voce tera ${idade + 10} anos.`);