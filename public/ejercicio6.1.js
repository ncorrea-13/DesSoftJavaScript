export function arregloPar() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let map1 = numeros.map((valor) => valor * 2);

    console.log("Arreglo original: " + numeros);
    console.log("Arreglo multiplicado por 2: " + map1);
}