import '../style.css'
/* DOM */

const boton2 = document.getElementById('boton-enviar')
boton2.addEventListener('click', function () {
    const valorIngresado = document.getElementById('texto').value;
    alert('Has ingresado: ' + valorIngresado);
});