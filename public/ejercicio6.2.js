export function arregloDePares() {
    const pares = []
    let valoresArreglo = 1

    for (let bucle = 1; bucle <= 20; bucle++) {
        if (bucle % 2 == 0) {
            pares.push(bucle);
        }
    }

    console.log("Primeros 10 números pares: ", pares);
}