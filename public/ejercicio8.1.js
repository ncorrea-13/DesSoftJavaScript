import '../style.css'
/* DOM */

const lista = document.querySelectorAll("#lista li");

lista.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    console.log("Se clickeo sobre: " + elemento.textContent);
});
})