/*Crear un programa para llevar la cuenta del puntaje de un partido de 
tenis. Debe pedir inicialmente por los nombres de las jugadoras, y 
luego ir pidiendo el nombre de la ganadora de cada set, y mostrando
el puntaje actualizado. Si alguna de las dos llega a los 3 puntos,
el programa debe terminar y anunciar la ganadora*/


let jugador1 = prompt("ingrese el nombre del primer jugador");
let jugador2 = prompt("ingrese el nombre del segundo jugador");

let puntos1 = 0; 
let puntos2 = 0;
let set=1;
let campeon;

while(puntos1!=3 && puntos2!=3){
    let ganador = prompt("ingrese la ganadora del set "+ set +": ");
    if (ganador == jugador1) {
        puntos1++;
        if(puntos1 == 3){
            campeon = jugador1;
        }
    } else {
        puntos2++;
        if(puntos2 ==3){
            campeon = jugador2;
        }
    }
    console.log("el ganador del set " + set + " es: " + ganador + " y la puntuacion del partido es " + puntos1 + " - " + puntos2);
    set++;
}
console.log("el ganador del partido es " + campeon);