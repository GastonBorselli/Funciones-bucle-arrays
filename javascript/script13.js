/*Replicar el juego de Simón dice. El programa debe mostrar una 
secuencia de colores, agregando por cada ronda que pase otro color
más. El usuario debe ingresar los colores de la secuencia uno por 
uno. Si erra la secuencia (es decir, si ingresa algún color mal), 
el programa debe terminar. Los colores posibles son: rojo, azul, 
verde y amarillo. Hay dos variantes posibles: o el juego continúa
indefinidamente hasta que se erra la secuencia, y muestra cuántas 
rondas se sobrevivió, o el programa permite elegir al principio 
cuántas rondas se desea hacer, y mostrar un mensaje de victoria si
se llega a esa cantidad de rondas sin errarle a la secuencia.*/

let verde = document.getElementById("verde");
let amarillo = document.getElementById("amarillo");
let rojo = document.getElementById("rojo");
let azul = document.getElementById("azul");
let botonJugar = document.getElementById("jugar");
let ronda = document.getElementById("ronda");
let botonesSimon = document.getElementsByClassName("circulo");
let secuencia = [];
let nivelMaximo = 30;
let velocidad = 1000;
let botones = Array.from(botonesSimon);
let nivel = 0;
let posicionUsuario = 0;
let bloquearBoton = true;
let display = {
    botonJugar,
    ronda
}

botonJugar.addEventListener('click',(event)=>{
    iniciarJuego();
})

function iniciarJuego(){
    display.botonJugar.disabled = true;
    actualizarRonda(0);
    posicionUsuario = 0;
    secuencia = crearSecuencia();
    botones.forEach((element, i )=>{
        element.classList.remove('perdedor');
        element.onclick = () => clickearBoton(i);
    });
    mostrarSecuencia();
    function actualizarRonda(valor){
        ronda = valor;
        display.ronda.textContent = `Ronda ${ronda}`;
    }

    function crearSecuencia(){
        return Array.from({length: nivelMaximo}, ()=>obtenerColorAleat());
    }
    function obtenerColorAleat(){
        return Math.floor(Math.random()*4);
    }
    function clickearBoton(valor){
        !bloquearBoton && validarColorElegido(valor);
    }
    function validarColorElegido(valor){
        if(secuencia[posicionUsuario] === valor){
            if(ronda === posicionUsuario){
                actualizarRonda(ronda+1);
                velocidad /=1.02;
            }
            else{
                posicionUsuario++;
            }
        }
        else{
          perderJuego(); 
        }
    }
    function mostrarSecuencia(){
        bloquearBoton=true;
        let indiceSecuencia = 0;
        let timer = setInterval(()=>{
            const boton = botones[secuencia[indiceSecuencia]];
            cambiarEstiloBotones(boton);
            setTimeout(()=>cambiarEstiloBotones(boton),velocidad/2)
            indiceSecuencia++;
            if(indiceSecuencia>ronda){
                bloquearBoton = false;
                clearInterval(timer);
            }
        }, velocidad);
        function cambiarEstiloBotones(boton){
            boton.classList.toggle('active');
        }
        function perderJuego(){
            display.botonJugar.disabled = false;
            bloquearBoton = true;
            botones.forEach(element=>{
                element.classList.add('perdedor');
            });
            actualizarRonda("Perdiste");
        }
        
    }
}