# Sistema de Menções - Classificação de Notas em JavaScript

Este projeto é um programa simples em JavaScript que calcula a média entre duas notas fornecidas pelo usuário e atribui uma menção qualitativa com base nessa média.

## Objetivo

Atribuir uma menção final conforme a média das duas avaliações inseridas pelo usuário. O programa segue a seguinte lógica de classificação:

## Funcionamento

1. O programa solicita ao usuário duas notas numéricas.
2. As notas são convertidas para o tipo `Number`.
3. A média é calculada pela soma das duas notas dividida por 2.
4. O valor da média (denominado `mencao`) é avaliado com estruturas `if/else if` para determinar a menção final:
   - **0**: Sem Rendimento (SR)
   - **> 0 e <= 2**: Inferior (II)
   - **> 2 e <= 4**: Médio Inferior (MI)
   - **> 4 e <= 6**: Médio (MM)
   - **> 6 e <= 8**: Médio Superior (MS)
   - **> 8 e <= 10**: Superior (SS)
   - **Qualquer valor fora desses intervalos**: entrada inválida

5. O programa imprime a média final juntamente com a menção correspondente.

## Tecnologias utilizadas

- Node.js
- Biblioteca `prompt-sync` para entrada de dados no terminal

## Como executar

1. Instale o [Node.js](https://nodejs.org/).
2. Instale a dependência necessária com o comando:
npm install prompt-sync
