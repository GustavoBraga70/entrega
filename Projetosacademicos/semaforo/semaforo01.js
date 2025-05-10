const prompt = require('prompt-sync')({sigint:true});
let color = prompt("Digite a cor indicada no semáforo: ")
color = color.toLowerCase()
switch(color) {
    case 'verde':
        console.log('Siga em frente!')
    break;
    case 'amarelo':
        console.log('Atenção!')
    break;
    case 'vermelho':
        console.log('Pare!') 
    break;    
    default:
        console.log('cor inválida!')         
} 