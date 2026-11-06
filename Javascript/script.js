let idade = Number(prompt("Qual é a sua idade?"));

if (idade >= 18) {
    console.log("Você tem " + idade + "anos. Você é maior de idade. Não vai fazer bagunça hein?");
} else {
    console.log("Você  tem" + idade + "anos. Você é menor de idade. cuidado!");
}
//média
let nota1 = Number(prompt("Digite a sua primeira nota:"));
let nota2 = Number(prompt("Digite a sua segunda nota:"));
let nota3 = Number(prompt("Digite a sua terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;
if (media >= 9) {
    console.log("Excelente! Você foi aprovado, sua média é " + media);
} else if (media >= 6) {
    console.log("Parabéns! Você foi aprovado, sua média é: " + media);
} else {
    console.log("Reprovado!!!" + media)
}
//Login de senha
let usuario = prompt("Digite o seu nome de usuário: ");
let senha = prompt("Digite a sua senha: ");

if (usuario === "admin" && senha === 1234) {
    console.log("Acesso feito com sucesso!!!");
} else {
    console.log("Usuário ou senha incorreta");
}
//dia da semana
let dia = Number(prompt("Digite um númerp entre 1 a 7 do dia da semana:"));
switch (dia) {
    case 1:
        console.log("Segunda");
        break;

    case 2:
        console.log("terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
        console.log("Digite um número entre 1 a 7");
}
//número positivo ou negativo
let Num = Number(prompt("Digite o seu número"));
if (Num >= 0) {
    console.log("Número positivo");
} else {
    console.log("Número negativo");
}
//veículo
let veículo = Number(prompt("Digite o número do veículo você utiliza, 1 para carro, 2 para moto, 3 para bicicleta e 4 para ônibus"));
switch (dia) {
    case 1:
        console.log("carro");
        break;

    case 2:
        console.log("moto");
        break;
    case 3:
        console.log("bicicleta");
        break;
    case 4:
        console.log("Ônibus");
        break;
}
console.log("Digite o número do veículo você utiliza, 1 para carro, 2 para moto, 3 para bicicleta e 4 para ônibus");
//Calculadora
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let soma = (num1 + num2);
let sub = (num1 - num2);
let multi = (num1 * num2);
let div = (num1 / num2);
console.log("a soma é: " + soma);
console.log("a subtração é: " + sub);
console.log("o produto é: " + multi);
console.log("a divisão é: " + div);
//sistema de pedidos de lanchonete
let pedido = Number(prompt("Olá! Qual é o seu pedido? 1 para Hambúrguer, 2 para Pizza, 3 para Cachorro-Quente e 4 para Refrigerante"));
switch (dia) {
    case 1:
        console.log("O Hambúrguer está por 18,00 Reais");
        break;

    case 2:
        console.log("A Pizza está por 35,00 Reais");
        break;
    case 3:
        console.log("O Cachorro-quente está por 12,00 Reais");
        break;
    case 4:
        console.log("O Refrigerante está por 7,00 Reais");
        break;
        if (pedido > 4) {
            console.log("erro! pedido não registrado")
        }
}
console.log("Olá! Qual é o seu pedido? 1 para Hambúrguer, 2 para Pizza, 3 para Cachorro-Quente e 4 para Refrigerante");
//Desconto de compra

let compra = Number(prompt("Digite o valor da sua compra:"));
if (compra >= 200) {
    console.log("Desconto aplicado: " + (compra - compra * 0.10));
} else {
    console.log("Desconto não aplicado");
}
//Verificar saldo  de bancário
let saldo = Number(prompt("Digite o seu saldo: "));
console.log("Seu saldo é: " + saldo);
let Compra = Number(prompt("Digite o valor que quer comprar: "));
if (saldo > compra) {
    console.log("A compra foi um sucesso!!!");
} else {
    console.log("Compra não foi um sucesso!")
}
//laço de repetição
let numero = Number(prompt("Entre com um número para exibir a tabuada: "));
for(let i =1; 1 <=10; i++){
    console.log(numero + "x" + i + "=" + (numero * i));
}
