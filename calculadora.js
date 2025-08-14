// calculadora.js
let numero1 = 15;
let numero2 = 0;
let operador = "/"; // Mude para '-', '*', '/' para testar

let resultado;

// Estrutura de decisão para verificar o operador
if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operador inválido!";
}

console.log("O resultado da operação é:", resultado);	