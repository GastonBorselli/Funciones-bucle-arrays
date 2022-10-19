/*Crear un programa que pida al usuario ingresar el nombre de 
una playlist y cuántas canciones desea agregar a la misma. Luego 
debe ir pidiendo agregar la cantidad de canciones elegidas de a 
una. Se debe ir mostrando la cantidad de canciones que quedan por 
agregar y la playlist con los temas hasta el momento a medida que 
se va a actualizando. Al finalizar mostrar un mensaje con el nombre
de la playlist y la lista de canciones.*/

let playlist = prompt("ingrese el nombre de su playlist");
let cantCanciones = prompt("ingrese la cantidad de canciones que desea agregar a su playlist");
let array = [];

for (let i = 0; i < cantCanciones; i++) {
    let canciones = prompt("ingrese el nombre de la cancion");
    array[i]=canciones;
    alert("agregó la cancion " + canciones +" a su playlist");
    let cancionesRestantes = cantCanciones - (i+1);
    alert("le quedan "+ cancionesRestantes + " canciones por añadir a su playlist");
    document.getElementById("cancionero").innerHTML = array;
}

