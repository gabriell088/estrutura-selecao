/*
Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript?
*/

// Defina os lados do triângulo
var lado1 = 5;
var lado2 = 5;
var lado3 = 5;

// Verifique o tipo de triângulo
if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}
