//const temperatura = 25;

//if (temperatura > 35 ) {
    //console.log("Esta calor!!")    
//}

//console.log("Fim do programa!")

const idade = Number(prompt("Sua idade: "));

//essa funcao ve se é um numero o que o usuario me mandou (isNaN)
if (Number.isNaN(idade) || idade < 0) {
    console.log("Idade invalida!");
} else {
    if(idade >= 18){
        console.log("Maior  de idade")
    } else {
        console.log("Menor de idade")
    }
}

