/*
Como você pode usar uma declaração if, else if, else para verificar 
se um número é par, ímpar ou zero em JavaScript? 
*/

// Defina seu número
var numero = 7;

// Verifique se o número é par, ímpar ou zero
if (numero === 0) {
    console.log("O número é zero.");
} else if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
