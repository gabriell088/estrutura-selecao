/*
Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript?
*/

// Defina a idade
var idade = 30;

// Determine a faixa etária com base na idade
if (idade >= 0 && idade <= 2) {
    console.log("A idade corresponde a um bebê.");
} else if (idade >= 3 && idade <= 12) {
    console.log("A idade corresponde a uma criança.");
} else if (idade >= 13 && idade <= 17) {
    console.log("A idade corresponde a um adolescente.");
} else if (idade >= 18 && idade <= 64) {
    console.log("A idade corresponde a um adulto.");
} else if (idade >= 65) {
    console.log("A idade corresponde a um idoso.");
} else {
    console.log("Idade inválida.");
}
