/*Crear un programa que pregunte si se desea buscar el mayor o el menor número de
un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar
uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número
mayor o menor de todos los ingresados según el elegido.*/

let entrada = prompt("desea que el programa encuentre el mayor o menor numero de un conjunto?");
let cantidad = prompt("entre cuántos numeros desea buscar?");

let array = [];

for (let i = 0; i < cantidad; i++) {
    
    array[i]= parseInt(prompt("ingrese un numero: "));
    alert("aun le quedad "+(cantidad-(i+1))+ " numeros por agregar");
}
let max = array[0];
let min = array[0];
console.log("Los numeros ingresados son: ");
for (let index = 0; index < array.length; index++) {

    console.log(array[index]);

    if (min>array[index]) {
        min=array[index];
    }

    if (max<array[index]) {
        max=array[index];
    }
}

if (entrada == "mayor") {
    console.log("el mayor numero es: " + max);
}
if (entrada == "menor") {
    console.log("el menor valor es: "+min);
}


