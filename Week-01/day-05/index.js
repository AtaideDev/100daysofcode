function numParesMeias(gaveta) {
    function contarPares(meias) {
      let numPares = 0;
      for (const meia in meias) {
        numPares += Math.floor(meias[meia] / 2);
      }
      return numPares;
    }
  
    const meiasQuantidade = gaveta.split('').reduce((obj, meia) => {
      obj[meia] = (obj[meia] || 0) + 1;
      return obj;
    }, {});
  
    return contarPares(meiasQuantidade);
  }
  
const meiasDesorganizadas= [
"AABCDDE",
"AABCCDDEFF",
"AABBCCDDEEFFGGHH",
"ABBCCDEEFGGHII",
"AABBDDEFFGGHIIJJ",
"AABCCDDFGGHIIJKK"
];

for (const gaveta of meiasDesorganizadas) {
  console.log(`Na gaveta tem ${numParesMeias(gaveta)} pares de meias`);
}