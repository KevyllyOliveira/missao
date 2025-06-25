const prompt = require('prompt-sync')(); // Para rodar no Node.js com input de usuário

const senhaCorreta = "1234";
let tentativas = 0;
let acessoPermitido = false;

// Solicita senha com até 3 tentativas
while (tentativas < 3 && !acessoPermitido) {
    let senha = prompt("Digite a senha de acesso: ");
    if (senha === senhaCorreta) {
        console.log("Acesso permitido!");
        console.log("Bem-vindo, agente!");
        acessoPermitido = true;
    } else {
        tentativas++;
     if (tentativas < 3) {
  console.log(`Senha incorreta. Tentativas restantes: ${3 - tentativas}`);
 } else {
    console.log("Número máximo de tentativas atingido. Acesso negado.");
        }
    }
}

if (acessoPermitido) {
    let sair = false;

    while (!sair) {
 console.log("\n=== MENU DE OPERAÇÕES ===");
console.log("1 – Tabuada de soma");
 console.log("2 – Tabuada de subtração");
console.log("3 – Tabuada de multiplicação");
 console.log("4 – Tabuada de divisão");
console.log("5 – Fatorial");
console.log("6 – Encerrar o programa");

let opcao = parseInt(prompt("Escolha uma opção: "));

if (opcao >= 1 && opcao <= 6) {
 if (opcao === 6) {
console.log("Encerrando o programa...");
 sair = true;
 continue;
 }

let numero = parseInt(prompt("Digite um número: "));

 if (isNaN(numero)) {
 console.log("Valor inválido. Por favor, digite um número inteiro.");
 continue;
 }

switch (opcao) {
 case 1:
    console.log(`\nTabuada de Soma do ${numero}`);
 for (let i = 0; i <= 10; i++) {
 console.log(`${numero} + ${i} = ${numero + i}`);
 }
break;
case 2:
 console.log(`\nTabuada de Subtração do ${numero}`);
for (let i = 0; i <= 10; i++) {
 console.log(`${numero} - ${i} = ${numero - i}`);
 }
break;
case 3:
console.log(`\nTabuada de Multiplicação do ${numero}`);
    for (let i = 0; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  }
 break;
case 4:
 console.log(`\nTabuada de Divisão do ${numero}`);
for (let i = 1; i <= 10; i++) {
 console.log(`${numero} ÷ ${i} = ${(numero / i).toFixed(2)}`);
}
break;
 case 5:
 if (numero < 0) {
     console.log("Fatorial não é definido para números negativos.");
 } else {
     let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
     fatorial *= i;
 }
     console.log(`Fatorial de ${numero} é ${fatorial}`);
 }
break;
 default:
 console.log("Opção inválida.");
 break;
}
 } else {
  console.log("Por favor, escolha uma opção válida de 1 a 6.");
}
    }
}
 

