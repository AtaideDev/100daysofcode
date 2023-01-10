// Você está no comando da churrasqueira. Uma espetada vegetariana é uma espetada que só tem legumes (-o) . Um espeto não vegetariano é um espeto com pelo menos um pedaço de carne (-x) .

// Quantidade de espetinhos
let espetinho1 = [
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--",
    "--xx--x--ox--",
    "--xx--x--ox--",
    "--xx--x--ox--",
    "--xx--x--xx--"
]
let espetinho2 = [
    "--oooo-ooo--",
    "--oooo-ooo--",
    "--oooo-ooo--",
    "--xxxxxxxx--",
    "--o---o---o--",
    "-o---o---ox--",
    "--o---o-----"
];

// Conta o número de espetos vegetarianos e não vegetarianos em uma matriz
// parâmetro espetinhos - um array de strings, cada string representando um tipo de espetinho.
// retorna um array com o número de espetinhos vegetarianos e não vegetarianos.

function contarEspetinhos(espetinhos) {
    let vegetarianos = 0;
    let naoVegetarianos = 0;

    for (let i = 0; i < espetinhos.length; i++) {
        let espetinho = espetinhos[i];
        if (espetinho.includes("x")){
            naoVegetarianos++
    }else{
    vegetarianos++
  }
}

return [vegetarianos, naoVegetarianos];
}

// Chamando a função 'contarEspetinhos' e passando o array espetinho1 ou espetinho2 como parâmetro.

// resultado = contarEspetinhos(espetinho1);
resultado = contarEspetinhos(espetinho2);
console.log(`Há ${resultado[0]} espetinhos vegetarianos e ${resultado[1]} espetinhos de carne.`)