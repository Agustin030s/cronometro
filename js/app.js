const btnIniciar = document.querySelector('#btnIniciar');
const btnPausar = document.querySelector('#btnPausar');
const btnReset = document.querySelector('#btnReset');

const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');

let intervalId;

let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;

const incrementarSegundos = () =>{
    segundos.innerText = contadorSegundos;
    if(contadorSegundos <= 60){
        contadorSegundos++;
        segundos.innerText = contadorSegundos;
    }else{
        contadorSegundos = 0;
        segundos.innerText = 0;

        incrementarMinutos();
    }
}

const incrementarMinutos = () => {
    contadorMinutos++;
    
    if (contadorMinutos <= 60) {
        minutos.innerText = contadorMinutos + ' : ';
    } else {
        contadorMinutos = 0;
        
        incrementarHoras();
    }
}

const incrementarHoras = () => {
    contadorHoras++;
    
    if (contadorHoras <= 24) {
        horas.innerText = contadorHoras + ' : ';
    } else {
        contadorHoras = 0;
    }
}

const iniciarCronometro = () =>{
    intervalId = setInterval(incrementarSegundos, 1000);
}

const pausarCronometro = () =>{
    clearInterval(intervalId);
}

const resetCronometro = () =>{
    clearInterval(intervalId);
    contadorSegundos = 0;
    contadorMinutos = 0;
    contadorHoras = 0;
    segundos.innerText = '00';
    minutos.innerText = '00 : ';
    horas.innerText = '00 : ';
}

btnIniciar.addEventListener('click', iniciarCronometro);
btnPausar.addEventListener('click', pausarCronometro);
btnReset.addEventListener('click', resetCronometro);