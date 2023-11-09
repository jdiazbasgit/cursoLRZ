let numAleatorios = [];
console.log(numAleatorios);

(function darNumero() {
    while (numAleatorios.length < 6) {
        let numAleatorio = Math.floor(Math.random() * 100);
        if (numAleatorio >= 1 && numAleatorio <= 49) {
            numAleatorios.push(numAleatorio)
        }
    }
})()

// darNumero();

console.log(numAleatorios);

let numerosPremiados = [5, 4, 9, 3, 7, 2, 1];
let numerosPrimitiva = numAleatorios;


(function premio() {

    if (numerosPremiados == numerosPrimitiva) {
        console.log("Enhorabuena, has sido el ganador de la primitiva")
    }

    if (numerosPremiados != numerosPrimitiva) {
        console.log(`Lo sentimos mucho, recarga la página para seguir jugando. Los números ganadores son ${numerosPremiados}`)
    }
})()

// premio();