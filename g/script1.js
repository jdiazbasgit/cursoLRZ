

//function ver(botonParaPulsar) {
//    console.log(botonParaPulsar.classList)
//   var divContenedor=document.querySelector("#divContenedor")
//    var h1Nuevo = document.createElement("h1")
//
for (let i = 0; i < 51; i++) {
    if (i % 2 != 0) {
        console.log(`valor de i: ${i}`)
        let contenedorpar = document.querySelector("#contendorpar");
        let h1Nuevo = document.createElement("h1");
        h1Nuevo.innerHTML = i;
    }
}
for (let i = 50; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(`valor de i: ${i}`)
    }
}
//}    

let numerosPrimitiva = [5, 4, 9, 3, 7, 2, 1]
let termine = false
//while(temrine==false)
console.log("antes:" + numerosPrimitiva)
while (!termine) {
    termine = true
    for (let i = 0; i < numerosPrimitiva.length - 1; i++) {
        if (numerosPrimitiva[i] > numerosPrimitiva[i + 1]) {
            termine = false
            let temporal = numerosPrimitiva[i + 1]
            numerosPrimitiva[i + 1] = numerosPrimitiva[i]
            numerosPrimitiva[i] = temporal
        }
    }
}
console.log("despues:" + numerosPrimitiva)


// ejercicio

var cantidadNumeros = 6
let numerosPrimitivo = []
while (numerosPrimitivo.length < 6) {
    function getRandomArbitrary(min, max) {
        return Math.random() * (49 - 1) + 0;
    }
}
while (!termine) {
    termine = true
    console.log("Primitvo:" + numerosPrimitivo)
    for (let i = 0; i < numerosPrimitivo.length - 1; i++) {
        if (numerosPrimitivo[i] > numerosPrimitivo[i + 1]) {
            termine = false
            let temporal = numerosPrimitivo[i + 1]
            numerosPrimitivo[i + 1] = numerosPrimitivo[i]
            numerosPrimitivo[i] = temporal
        }
    }
}
console.log("despuesprimitivo:" + numerosPrimitivo)













let numerosPrimitvaa = new Array