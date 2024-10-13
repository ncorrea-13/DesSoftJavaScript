import './style.css'
import { esPar } from './public/ejercicio4.1.js'
import { convertirCelciusAFarhenheit } from './public/ejercicio4.2.js'
import persona from './public/ejercicio5.1.js'
import libro from './public/ejercicio5.2.js'
import { arregloPar } from './public/ejercicio6.1.js'
import { arregloDePares } from './public/ejercicio6.2.js'
import { mostrarCorreo } from './public/ejercicio9.js'

console.log("Seccion 4 Ejercicio 1");
console.log("El número 8 es par: ", esPar(8));
console.log("El número 7 es par: ", esPar(7));

console.log("Seccion 4 Ejercicio 2");
convertirCelciusAFarhenheit(30);

console.log("Seccion 5 Ejercicio 1");
console.log("Antes de cambiar la ciudad:");
console.log(persona);

persona.cambiarCiudad("San Rafael");

console.log("Después de cambiar la ciudad:");
console.log(persona);

console.log("Seccion 5 Ejercicio 2");
libro.esAntiguo();

console.log("Seccion 6 Ejercicio 1");
arregloPar();

console.log("Seccion 6 Ejercicio 2");
arregloDePares();


mostrarCorreo();