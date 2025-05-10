# Semáforo - Projeto de Lógica com JavaScript

Este projeto é um simples programa em JavaScript que simula o funcionamento de um semáforo. O usuário insere uma cor e, com base na cor informada, o sistema exibe uma mensagem correspondente à ação recomendada.

## Como funciona

- O programa solicita que o usuário digite uma cor relacionada ao semáforo.
- A entrada é convertida para letras minúsculas para evitar problemas com maiúsculas/minúsculas.
- Utiliza-se uma estrutura `switch` para verificar a cor inserida:
  - **verde**: exibe "Siga em frente!"
  - **amarelo**: exibe "Atenção!"
  - **vermelho**: exibe "Pare!"
  - Qualquer outra entrada: exibe "cor inválida!"

## Tecnologias utilizadas

- Node.js
- Biblioteca `prompt-sync` para leitura de entrada no terminal

## Como executar

1. Certifique-se de ter o [Node.js]instalado.
2. Instale a dependência `prompt-sync` com o comando:

npm install prompt-sync
