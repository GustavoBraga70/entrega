const prompt = require('prompt-sync')({sigint: true});
let cor = prompt ('Escreva uma cor entre (verde, amarelo e vermelho): ');
cor = cor.toLowerCase()
let result = (cor == "verde")? "siga!" : (cor == "amarelo")? "atenção!" : (cor == "vermelho")?  "pare agora burro" : "cor não identificada";
console.log (`O sinal está ${cor}, entao ${result}`);
