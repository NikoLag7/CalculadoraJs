const displayvalorprimero=document.getElementById('valorprimero');
const displayvalor2=document.getElementById('valor2');
const numeros= document.querySelectorAll('.numero');
const operadores=document.querySelectorAll('operador');

const display= new Display(displayvalorprimero,displayvalor2);

numeros.forEach(boton => {
    boton.addEventListener('click', () => display.addNum(boton.innerHTML));
});


