const prompt = require('prompt-sync')({sigint:true});

let n1 = prompt("Digite seu número: ");
let order = parseFloat(n1 % 2);

if ( order == 0 ) {
    console.log (`O número ${n1} é PAR!`);
}
else if ( order == 1 ) {
    console.log(`O número ${n1} é ÍMPAR!`);
}
else {
    console.log(`O número ${n1} NÃO é PAR nem ÍMPAR!`);
}