// Você recebe uma sequência de palavras. Você precisa encontrar a palavra "Nemo" e retornar uma string como esta: `I found Nemo at [the order of the word you find nemo]!`. Se você não conseguir encontrar o Nemo, retorne ´I can't find Nemo :(`.

const sequenciaDePalavras =["íntegra","lampião","joelho","autóctone","dermatologia","magnitude","escrevesse","precioso","cimento","Nemo","papel","moeda"];

let posicao = sequenciaDePalavras.indexOf('Nemo');

if (posicao >= 0) {
    console.log(`Eu encontrei ${sequenciaDePalavras[posicao]} na posição ${posicao + 1}.`);
}else {
  console.log(`Eu não consegui encontrar o que procura.`);
}