// Cria uma função que a idade se converta em dias

let idade = 18
let ano = 365

if(idade > 0){
    idadeEmDias = (idade * ano)
    console.log(`Seus dias vivos somam ${idadeEmDias}.`);
}
else{
    console.log("Idade Inválida");
}