//const heading = document.getElementById();
const heading1 = document.querySelector('.header__texto h2');
heading1.textContent = 'Nuevo Heading Prueba'
heading1.classList.add('nueva-clase');
console.log(heading1)
    //const heading2 = document.querySelectorAll();

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('New-class');
//enlaces[0].classList.remove('navegacion__enlace');
console.log(enlaces[0]);


//getElementByID

const heading2 = document.getElementById('heading');

console.log(heading2)

//Generar un nuevo enlace con código JS

const nuevoEnlace = document.createElement('A');
nuevoEnlace.classList.add('navegacion__enlace');
nuevoEnlace.href = 'http://google.com';
nuevoEnlace.textContent = 'New A';

//Agregar enlace al html

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace)


//Eventos

// console.log(1);

// window.addEventListener('load', function() { //Espera a que se descargue todo
// console.log(2);
// });

// window.onload = function() {
// console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { //Se espera a que descargue el HTML pero no espera CSS o IMG
// console.log(4);
// })

// console.log(2);

// console.log(5);

// window.onscroll = function(evento) {
// console.log(evento);
// }

//Seleccionar elemento y asociarles un evento
//PODEMOS UTILIZAR EL EVENTO CLICK EN IMG TXT ETC

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
// console.log(evento);
// evento.preventDefault();

// });

//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

//Creamos las variables para seleccionar el HTML, en este caso los inputs del formulario

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//Agregamos un evento al formulario con una funcion que lee el texto que escribe el usuario
nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);


mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    //console.log(e.target.value);

    //Agregamos los datos escritos a cada campo del objeto
    datos[e.target.id] = e.target.value;

    console.log(e.target);
    console.log(datos);
}

//Evento de Submit
//EN FORMULARIOS TENEMOS QUE UTILIZAR SUBMIT SI O SI PARA VALIDAR EL FORMULARIO


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();


    //VALIDAR FORMULARIO
    const { nombre, email, mensaje } = datos

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlertas('Todos los campos son obligatorios', 'error');
    } else {
        mostrarAlertas('El formulario se ha enviado con exito!');
    }

    console.log(nombre);
    console.log(email);
    console.log(mensaje);


    //ENVIAR FORMULARIO

})

function mostrarAlertas(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparece despues de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}

// function mostrarError(mensaje) {
// const error = document.createElement('P');
// error.textContent = mensaje;
// error.classList.add('error');
// formulario.appendChild(error);
// console.log(error);

// //Desaparece despues de 3 segundos

// setTimeout(() => {
// error.remove();
// }, 5000);
// }

// function formularioEnviado(mensaje) {
// const correcto = document.createElement('P');
// correcto.textContent = mensaje;
// correcto.classList.add('correcto');
// formulario.appendChild(correcto);


// setTimeout(() => {
// correcto.remove();
// }, 3000);
// }