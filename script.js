const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

// Recorre todos los botones con un for para agregarles un event listener
// Asigna el atributo de cada boton a la variable number
// Agrega a screen los valores de number
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

// Se define una variable que evalua el valor en screen y ejecuta la operacion. 
// Se crea un if para que solo evalue si hay valores en pantalla
equalBtn.addEventListener('click', function() {
    if(screen.value === '') {
        alert('Ingresa un valor')
    } else {

    let value = eval(screen.value);
    screen.value = value;
    }  
})

// Cambia el valor de screen a "vacio" cuando se clickea el boton de clear
clearBtn.addEventListener('click', function() {
    screen.value = '';
})