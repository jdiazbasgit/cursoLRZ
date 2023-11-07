// Orden en el código:
// propiedades
// constructores
// metodos

export class Primitiva{ //export porque lo llamas desde fuera
    nunerosPrimi= new Array(); //lo mismo q poner var numerosPrimi= new Array(); son var por defecto
    longitud=0; //mejor inicializar las propiedades para evitar undefined

    constructor(longitud){
        this.longitud=longitud; //this.longitud es la inicializada a cero de la linea 8. longitud es el parámetro q se le pasa al constructor
    }
}


//métodos (funciones)

damenumero = (numeroMaximo) => {
    let numero = 0
    while (numero == 0 || numero > numeroMaximo) {
        numero = Math.floor(Math.random() * 100)
    }
    return numero
}

calcularNumerosPrimitiva = () => {
    numerosPrimitiva = new Array()
    while (numerosPrimitiva.length < this.longitud) {
        let numero = damenumero(49)
        if (numerosPrimitiva.indexOf(numero) === -1) {
            numerosPrimitiva.push(numero)
        }
    }
    //numerosPrimitiva.sort((a, b) => {return a - b })
    ordenar(numerosPrimitiva)

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