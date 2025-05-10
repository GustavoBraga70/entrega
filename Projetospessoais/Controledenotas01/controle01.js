/* MENÇÕES */
const prompt = require('prompt-sync')({sigint: true});

var nota1 = Number(prompt("Digite a nota de sua primeira avaliação: "));
var nota2 = Number(prompt("Digite a nota de sua segunda avaliação: "));

var mencao = Number(nota1 + nota2)/2;

if (mencao == 0) {
    console.log(`Sua menção final é ${mencao} = Sem Rendimento(SR).`);
}
else if (mencao>0 && mencao<=2) {
    console.log(`Sua menção final é ${mencao} = Inferior(II).`);
}
else if (mencao>2 && mencao<=4) {
    console.log(`Sua menção final é ${mencao} = Médio Inferior(MI).`);
}
else if (mencao>4 && mencao<=6) {
    console.log(`Sua menção final é ${mencao} = Médio(MM).`);
}
else if (mencao>6 && mencao<=8) {
    console.log(`Sua menção final é ${mencao} = Médio Superior(MS).`);
}
else if (mencao>8 && mencao<=10) {
    console.log(`Sua menção final é ${mencao} = Superior(SS).`);
}
else {
    console.log("Essa menção não é válida para a execução do programa.")
}