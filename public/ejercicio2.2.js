export function parImpar() {
    console.log("Seccion 2 Ejercicio 2");
    let numero = prompt("Ingrese un número");

    if (numero % 2 == 0) {
        console.log("El número ", numero, " es par");
    } else {
        console.log("El número ", numero, " es impar");
    }
}