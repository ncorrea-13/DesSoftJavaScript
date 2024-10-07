import './style.css'
import { sumatoria } from './public/ejercicio1.2.js'
import { llamado } from './public/ejercicio1.3.js'
import { mayorMenor } from './public/ejercicio2.1.js'
import { parImpar } from './public/ejercicio2.2.js'
import { bucle } from './public/ejercicio3.1.js'
import { mayorCien } from './public/ejercicio3.2.js'
import { esPar } from './public/ejercicio4.1.js'
import { convertirCelciusAFarhenheit } from './public/ejercicio4.2.js'
import persona from './public/ejercicio5.1.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
  </div>
`
sumatoria();
llamado();
mayorMenor();
parImpar();
bucle();
mayorCien();

console.log("Seccion 4 Ejercicio 1");
console.log("El número 8 es par: ",esPar(8));
console.log("El número 7 es par: ", esPar(7));

convertirCelciusAFarhenheit(30);


console.log("Seccion 5 Ejercicio 1");

console.log("Antes de cambiar la ciudad:");
console.log(persona);

persona.cambiarCiudad("San Rafael");

console.log("Después de cambiar la ciudad:");
console.log(persona);

