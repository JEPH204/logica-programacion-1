const prompt = require('prompt-sync')();

let n1 = Number(prompt("Ingresa tu primer numero: "));
let n2 = Number(prompt("Ingresa tu segundo numero: "));
let n3 = Number(prompt("Ingresa tu tercer numero: "));

let numeros = [
    n1,
    n2,
    n3
];

function validarNumero(numero) {
    for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    if (isNaN(num)) {
        console.log ("Por favor, ingrese un dato (valor numerico) valido");
        return false;
        }    
    }
    return true;

}

function compararYOrdenar(numero){
    if (n1 === n2 && n2 === n3 && n1 === n3) {
        console.log("Todos los numeros son Iguales");
    } else if (n1 === n2) {
        console.log(`Tienes DOS numeros con el valor: ${n1}`);
    } else if (n1 === n3) {
        console.log(`Tienes DOS numeros con el valor: ${n1}`);
    } else if (n2 === n3) {
        console.log(`Tienes DOS numeros con el valor: ${n2}`);
    } else {
        console.log("Los TRES numeros son diferentes");
    }

    let ordenadoAscendente = [...numero].sort((a, b) => a - b);
    let ordenadoDescendente = [...numero].sort((a, b) => b - a);

    console.log(`Orden de mayor a menor: ${ordenadoDescendente}`);
    console.log(`Orden de menor a mayor: ${ordenadoAscendente}`);
}

if (validarNumero(numeros)) {
    compararYOrdenar(numeros);
}

