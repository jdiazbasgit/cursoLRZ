// creo la clase Primitiva. Cada clase está en un archivo (normalmente el mismo nombre para la clase y para el archivo)
// dentro de la clase, primero las propiedades, luego los constructores y luego los metodos
export class Primitiva {
// Primero las propiedades
    numerosPrimitiva = new Array()
    longitud = 0
    // la inicializo para evitar undefined

// despues los constructores
    constructor(longitud) {
        this.longitud = longitud
    }
// AHora los metodos
// Primero dameNumero
    damenumero = (numeroMaximo) => {
    let numero = 0
    while (numero == 0 || numero > numeroMaximo) {
        numero = Math.floor(Math.random() * 100)
    }
    return numero
}

// Despues el de calcular
    calcularNumerosPrimitiva = () => {
        // Ya no paso el parametro porque me viene de fuera
    numerosPrimitiva = new Array()
    while (numerosPrimitiva.length < this.longitud) {
        // en lugar del parametro uso la longitud que he definido como entrada
        let numero = damenumero(49)
        if (numerosPrimitiva.indexOf(numero) === -1) {
            numerosPrimitiva.push(numero)
        }
    }
    numerosPrimitiva.sort((a, b) => { return a - b })
    //ordenar(numerosPrimitiva)

}

//finalmente el de ordenar (por metodo burbuja)
    ordenar = (matrizDeNumeros) => {
    let termine = false
    //while(termine==false)

    while (!termine) {
        termine = true
        for (let i = 0; i < matrizDeNumeros.length - 1; i++) {
            if (matrizDeNumeros[i] > matrizDeNumeros[i + 1]) {
                termine = false
                let temporal = matrizDeNumeros[i + 1]
                matrizDeNumeros[i + 1] = matrizDeNumeros[i]
                matrizDeNumeros[i] = temporal
            }
        }
    }
}
    

}