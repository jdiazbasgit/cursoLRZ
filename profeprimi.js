let numerosPrimitiva = new Array()

//function dameNumero(numeroMaximo){
let damenumero = (numeroMaximo) => {
    let numero = 0
    while (numero == 0 || numero > numeroMaximo) {
        numero = Math.floor(Math.random() * 100)
    }
    return numero
}

let calcularNumerosPrimitiva = (longitudDelArray) => {
    numerosPrimitiva = new Array()
    while (numerosPrimitiva.length < longitudDelArray) {
        let numero = damenumero(49)
        if (numerosPrimitiva.indexOf(numero) === -1) {
            numerosPrimitiva.push(numero)
        }
    }
    numerosPrimitiva.sort((a, b) => {return a - b })
    //ordenar(numerosPrimitiva)esta funcion de la burbuja que esta mas abajo ya no hace falta comentarlo porque se usa sort

    let h1 = document.createElement("h1")
    //numerosPrimitiva.forEach(numero => {
    //h1.innerHTML = `${h1.innerHTML}  ${numero}`
    //
    h1.innerHTML = numerosPrimitiva.join(" - ")
    //h1.innerHTML = numerosPrimitiva.toString().replaceAll(","," - ")
    // })
    document.querySelector("#primitiva").innerHTML = ""
    document.querySelector("#primitiva").appendChild(h1)

}

//function ordenar(matrizDeNumeros){

/* let ordenar = (matrizDeNumeros) => {
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
*/
calcularNumerosPrimitiva(6)