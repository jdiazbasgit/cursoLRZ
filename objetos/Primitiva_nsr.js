export class Primitiva_nsr {
    numeroPrimitiva = new Array()
    longitud = 0
    
    constructor(longitud) {
        this.longitud = longitud
    }
    damenumero = (numeroMaximo) => {
        let numero = 0
        while (numero == 0 || numero > numeroMaximo) {
            numero = Math.floor(Math.random() * 100)
        }
        return numero
    }
    
    calcularNumerosPrimitiva = (longitudDelArray) => {
        let numerosPrimitiva = new Array()
        while (numerosPrimitiva.length < longitudDelArray) {
            let numero = damenumero(49)
            if (numerosPrimitiva.indexOf(numero) === -1) {
                numerosPrimitiva.push(numero)
            }
        }
        //numerosPrimitiva.sort((a, b) => {return a - b })
        //ordenar(numerosPrimitiva)
    
    }
    
    //function ordenar(matrizDeNumeros){
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