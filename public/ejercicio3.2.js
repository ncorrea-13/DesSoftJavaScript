export function mayorCien() {
    console.log("Seccion 3 Ejercicio 2");
    let variable;

    do {
        variable = prompt("Ingrese un valor mayor a 100");
    } while (variable < 100);

    console.log("Ingresaste un numero mayor a 100, ", variable);
}