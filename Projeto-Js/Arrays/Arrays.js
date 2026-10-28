// const notas = [7, 8.5, 6]; // array simples--lembrar que ele sempre comeca na sequencia 0, 1, 2,...
// const aluno = {nome: "Lucas", idade: 35} //array de objetos

// const turma = [
//     {nome: "Lucas", idade: 35},
//     {nome: "Ana", idade: 20},
// ];

// console.log(notas[1]);
// console.log(aluno.nome); //coloco o nome do array (nome) e o objeto(.nome)
// console.log(turma[1].nome);

// const frutas = ["Maca", "Banana", "Laranja"];
// console.log(frutas[0]);
// console.log(frutas.length); //o comprimento que ele tem, ou seja, quantos ele tem.
// console.log(frutas[frutas.length -1]);// ultimo da lista é o length -1
// console.log(frutas[frutas.at(-1)]);// ultimo da lista é o at -1
// console.log(frutas[frutas[10]]);// mostrar um numero que n existe no array

// frutas[1] = "Morango";// para trocar o conteudo
// console.log(frutas);

// const fila = ["Ana", "Bia"];
// fila.push("Caio"); //adiciono no final
// fila.unshift("Zeca");//Adiciono no final do meu array
// console.log(fila);

// const atendido = fila.shift ();//remove do inicio do meu array e traz na variarel quem ele removeu
// const saiu = fila.pop ();//remove do fim do meu array e traz na variarel quem ele removeu
// console.log(fila);
// console.log(atendido, saiu);

// const letras = ["a", "b", "c", "d", "e"];
// letras.splice(1, )// array=letras - funcao=splice - o primeiro numero (1) é a partir de onde quero que comeco e o segundo numero
// //quantos array quero remover.
// console.log(letras);

// letras.splice(1, 0, "x", "y") // terceiro = remover - quarto = adicionar
// console.log(letras);

// letras.splice(0, 1, "z")//"z" estou removendo e colocar outro no lugar
// console.log(letras);

// const nums = [1, 2, 3, 4, 5];
// console.log(nums.slice(1, 3));//intervalo do meu array, inicio e fim
// console.log(nums.slice(-2));//me tras os dois ultimos
// console.log(nums.slice());//puxa o array inteiro
// console.log(nums.includes(3));//entra no array e procura o parecido, se tiver ele responde com true
// console.log(nums.indexOf(4));//procuro o indice
// console.log(nums.indexOf(99));//procuro o indice se náo existir me devolve um -1
// console.log(nums.join(" - "));// juntar toto mundo e colocar um traco no texto (1 - 2 - 3 - 4 - 5)
// console.log(nums); //tras o meu array

// const a = [1, 2];
// const b = [3, 4];
// console.log(a.concat(b));//juntar os dois arrays
// console.log([...a, ...b]);//vou trazer todos os elementos de a colocando os ... na frente e todos de b.
// console.log([0, ...a, 99, ...b]);

// const aluno = {nome: "Regiane", idade: 18};
// aluno.idade = 21;
// aluno.cidade = "Sao Paulo";
// console.log(aluno);

//delete aluno.cidade;
//console.log(aluno);
