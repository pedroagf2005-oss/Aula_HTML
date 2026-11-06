function apresentar(nome) {
    console.log("olá!, " + nome + "!");
}

apresentar("Alice");
apresentar("Bob");
apresentar("Charlie");
apresentar("David");
apresentar("Eve");

function somar(a, b) {
    let resultado = a + b;
    console.log("A soma de " + a + " e " + b + " é: " + resultado);
}

function verificarIdade(idade){
if(idade>=18){
return " Você tem" + idade + "anos. Você é maior de idade";
} else{
return "Você tem" + idade + "anos. Você é menor de idade";
}   
}
let idade = Number(prompt("Digite a sua idade: "));
console.log(verificarIdade(idade));

let alunos = ["Pedro", "Rafael", "Miguel", "Fernando"];
console.log(alunos[0]);

alunos.splice(1,2)
console.log(alunos);

let posicao = alunos.indexOf("Iago") ;
console.log(posicao);
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
for (let aluno of alunos) {
    console.log(aluno);
}

let aluno = {
    nome: "Pedro",
    idade: 21,
    curso: "Eng. de Software"
};
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);




//Boas vindas
function apresentar(nome) {
    console.log("olá!, " + nome + "!");
}

//Calculadora de multiplicação
function multiplicar(a, b) {
    let resultado = a * b;
    console.log("A multiplicação de " + a + "e" + b + "é: " + resultado);
}

//número positivo ou negativo e zero
let Num = Number(prompt("Digite o seu número"));
if (Num >= 0) {
    console.log("Número positivo");
} if ( Num === 0) {
    console.log("zero");
}else{
    console.log("Número negativo");
}

//Média de 4 notas
let nota1 = Number(prompt("Digite a sua primeira nota:"));
let nota2 = Number(prompt("Digite a sua segunda nota:"));
let nota3 = Number(prompt("Digite a sua terceira nota:"));
let nota4 = Number(prompt("Digite a sua quarta nota:"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 9) {
    console.log("Excelente! Você foi aprovado, sua média é " + media);
} else if (media >= 6) {
    console.log("Parabéns! Você foi aprovado, sua média é: " + media);
} else {
    console.log("Reprovado!!!" + media)
}

//array com 5 frutas
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} 
 
//Lista de compras
let listacompras = ["Arroz", "Feijão", "Macarrão"];
for (let i = 0; i < listacompras.length; i++) {
    console.log(listacompras[i]);
} 

listacompras.push("Carne", "Frango", "Leite");
console.log(listacompras);
//Números maiores que 10
let numeros = [5, 12, 8, 20, 3, 15];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > 10) {
        console.log(numeros[i] + " é maior que 10");
    }
}

//Cadastro de produtos
let produtos = [
    { nome: prompt("Digite o nome do produto:"), 
        preco: Number(prompt("Digite o preço do produto:")), 
        quantidade: Number(prompt("Digite a quantidade do produto:")) 
    }
]; 
console.log("Produto cadastrado: " + produtos[0].nome + ", Preço: " + produtos[0].preco + 
    ", quantidade: " + produtos[0].quantidade);
    
