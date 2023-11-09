export class Primitiva {
    numAleatorios = new Array()
    longitud = 0;

    constructor(longitud) {
        this.longitud = longitud
    }

    ordenar = () => {
        let termine = false;
        //function ordenar() {
        while (!termine) {                                                              // mientras no termine ejecuto el codigo
            termine = true // Damos por supuesto que la condición es true
            for (let i = 0; i < numAleatorios.length - 1; i++) {
                if (numAleatorios[i] > numAleatorios[i + 1]) { // Aquí comparo si el número de la posición i(empieza en 0) es mayor o no que el número de la posición i+1
                    termine = false // Como no se cumple la condición supuesta de termine = true se ejecuta el siguiente código
                    let temporal = numAleatorios[i + 1] // Doy una variable al número de la posición i+1 para poder cambiarlo
                    numAleatorios[i + 1] = numAleatorios[i] // Paso el número de i+1 a i porque i es mayor
                    numAleatorios[i] = temporal // Paso el número de i a la posición i+1
                }
            }
        }
    }
    
    // Con esta función saco números aleatorios ("numAleatorio") entre 1 y 49 y evita que se repitan al incluirse en el ARRAY "numAleatorios"
    darNumero = () => {
        // function darNumero() {
    
        while (numAleatorios.length < this.longitud) {
            // for (let i = 0; numAleatorios.length < 6; i++) {                         // Esto lo comento porque me ha salido bien pero creo que no tiene sentido
            let numAleatorio = Math.floor(Math.random() * 100);
            if ((numAleatorio >= 1 && numAleatorio <= 49) && (!numAleatorios.includes(numAleatorio))) {
                numAleatorios.push(numAleatorio)
            }
    
            if (numAleatorio < 1 || numAleatorio > 49 || numAleatorios.includes(numAleatorio)) {
                numRepetidos.push(numAleatorio)
            }
    
        }
    
        ordenar(numAleatorios)
    
        numAleatorios.sort((a, b) => a - b); // En una función ARROW si la ejecución es un "return" 
        //se puede quitar la palabra y las {}
    
    }
}