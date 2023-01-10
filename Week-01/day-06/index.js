// https://open.spotify.com/playlist/2vO31AUQpsylVnQzcwykxt?si=78a11d3763374de8
function procurarPrimo(numero) {
    //verificar se o numero é menor ou igual a 1
    if (numero <= 1) {
        return `${numero} não é primo. O próximo número primo é 2`
    }
    // Verifica se o número é primo
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            // Número não é primo, então retorna uma mensagem informando o próximo número primo
            return  `${numero} não é primo, o número primo mais próximo é ${procurarPrimo(numero + 1)}`;
        }
    }
    // Número é primo, então retorna o próprio número
    return numero;
}
console.log(`${procurarPrimo(4)}.`);