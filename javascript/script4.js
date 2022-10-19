/*Crear un programa que pida ingresar un número, y muestre su factorial. Este se
calcula multiplicando el mismo número y todos los números que le anteceden hasta
el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 * 1 = 24*/

let numero = parseInt(prompt("ingrese un numero para calcular su factorial"));
let factorial=1;
console.log("el factorial de " + numero+ " es: ");
for (let i = numero; i >0; i--) {
    factorial = factorial*i;
    
}
console.log(factorial);