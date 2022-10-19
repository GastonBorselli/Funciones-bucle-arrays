/*Crear un programa que elija un número al azar entre 1 y 10. 
El programa debe luego pedir al usuario que intente adivinar el 
número. Por cada intento, debe avisar si el número a adivinar es 
mayor o menor que el número ingresado. El programa debe terminar 
cuando se adivina el número.*/

let adivina = Math.floor(Math.random() * 10) + 1;
let numero = parseInt(prompt("ingrese un numero y compruebe si adivinó la selección de la IA"));
let intentos=0;

while(numero!=adivina){
    if(numero>adivina){
        alert("el numero ingresado es mayor al elegido por la IA, siga intentando");
        numero=parseInt(prompt("ingrese un numero y compruebe si adivinó la selección de la IA"));    
    }
    if(numero<adivina){
        alert("el numero ingresado es menor que el elegido por la IA, siga intentando");
        numero=parseInt(prompt("ingrese un numero y compruebe si adivinó la selección de la IA"));
    }
    intentos++;
    
}
alert("usted adivinó despues de " + intentos);