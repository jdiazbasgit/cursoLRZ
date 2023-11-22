export class Primitiva {
    //prpoiedades de la clase
    numerosPrimitiva = new Array()
    longuitud = 0 //mejor inicializar

    //constructor// Se le dan valores de sus propiedades
    constructor(longuitud) {
        this.longuitud = longuitud

    }
    //metodos

    damenumero = (numeroMaximo) => {
        let numero = 0
        while (numero == 0 || numero > numeroMaximo) {
            numero = Math.floor(Math.random() * 100)
        }
        return numero
    }

    calcularNumerosPrimitiva = () => {
        numerosPrimitiva = new Array()
        while (numerosPrimitiva.length < this.longuitud) {
            let numero = damenumero(49)
            if (numerosPrimitiva.indexOf(numero) === -1) {
                numerosPrimitiva.push(numero)
            }
        }
        // numerosPrimitiva.sort((a, b) => { return a - b })
        ordenar(numerosPrimitiva)
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

        
            }    }
        }


    