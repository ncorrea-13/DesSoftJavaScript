import '../style.css'
/* DOM */

export function mostrarCorreo() {
  const correo = localStorage.getItem('correo');
  console.log(correo)
  const correoText = document.getElementById('correoText');
  const eliminarCorreo = document.getElementById('borrarCorreo');

  if (correo) {
    correoText.textContent = `Correo guardado: ${correo}`;
    eliminarCorreo.style.display = 'inline-block';
  } else {
    correoText.textContent = '';
    eliminarCorreo.style.display = 'none';
  }
}

document.getElementById('miFormulario').addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInput = document.getElementById('correo');
  localStorage.setItem('correo', emailInput.value);
  mostrarCorreo();
  emailInput.value = '';
});

document.getElementById('borrarCorreo').addEventListener('click', function () {
  localStorage.removeItem('correo');
  mostrarCorreo();
});

