/*
Como você pode usar uma declaração if, else if, else para verificar 
se um número é múltiplo de 2, 3 ou 5 em JavaScript?
*/

// Defina o número
var numero = 15;

// Verifique se o número é múltiplo de 2, 3 ou 5
if (numero % 2 === 0) {
    console.log("O número é múltiplo de 2.");
} else if (numero % 3 === 0) {
    console.log("O número é múltiplo de 3.");
} else if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5.");
} else {
    console.log("O número não é múltiplo de 2, 3 ou 5.");
}
