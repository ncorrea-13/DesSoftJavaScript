import '../style.css'
/* DOM */

const elementos = document.querySelectorAll('elemento');
elementos.forEach(elemento => {
  elemento.addEventListener('click', function () {
    console.log(elemento.textContent);
  });
});

const texto = document.getElementById('campo-texto');
const deshabilitar = document.getElementById('deshabilitar-btn');
const habilitar = document.getElementById('habilitar-btn');

deshabilitar.addEventListener('click', function () {
  texto.disabled = true;
});

habilitar.addEventListener('click', function () {
  texto.disabled = false;
});