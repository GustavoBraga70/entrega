const prompt = require('prompt-sync')({sigint:true});

let n1 = prompt("Selecione seu número: ");
let order = (n1 % 2 == 0) ? "Par" : "Ímpar";

console.log(`Seu número é ${order}`);
