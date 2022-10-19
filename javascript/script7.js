/*Múltiples intentos
Crear un programa que pida ingresar usuario y contraseña. 
El programa debe permitir hasta 3 intentos, cuando el usuario 
y/o la contraseña sean incorrectos. Si se ingresa correctamente
ambos antes de 3 intentos erróneos, debe mostrar un mensaje de
bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un
mensaje de error y terminar el programa. El usuario y la 
contraseña ya deben estar guardadas en variables. */

    
    
    // function ir() {
    //     let intentos = 0;
    //     let user="gaston";
    //     let password = "1234";

    //     while(intentos<3){
    //         if (document.getElementById("usuario").value == user && document.getElementById("contrasenia").value ==password) {
    //             alert("Bienvenido a la app");
    //             intentos=3;
    //         }
    //         else{                    
    //                 intentos++;
    //                 
    //         }
    //         // alert("Lo siento, a superado el limite de intentos, vuelva mas tarde");
    //     } 
        
    // }
    
let intentos = 0;
let user="gaston";
let password = "1234";    



while(intentos<3){
    let usuario = prompt("ingrese su usuario: ");
    let contrasenia = prompt("ingrese la contraseña");
    
    if (usuario==user && contrasenia == password) {
        alert("Bienvenido a la app");
        intentos=3;
    }       
    else{
        intentos++;
        alert("por favor vuelva a ingresar los valores, le quedan " + (3-intentos));
    }
}

