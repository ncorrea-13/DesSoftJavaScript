import '../style.css'
/* DOM */

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("boton-color");

    button.addEventListener("click", () => {
        const parrafos = document.querySelectorAll('p');
        parrafos.forEach(p => {
            p.classList.add('blue-text');
        });
    });
});
