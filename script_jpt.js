

function ver(botonParaPulsar) {
    console.log(botonParaPulsar.classList)
    var divContenedor = document.querySelector("#divContenedor")
    var h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = "has pulsado el boton"
    divContenedor.classList.add("bg-danger")
    divContenedor.appendChild(h1Nuevo)
    //var boton=document.querySelector("#boton")
    botonParaPulsar.classList.remove("bg-danger")
    botonParaPulsar.classList.add("bg-success")

}

for (let i = 0; i < 50; i++)
    if (i % 2 != 0) {
        console.log(`[valor de impares ${i}`)
    }

for (let i = 50; i <= 100; i++)
    if (i % 2 == 0) {
        console.log(`[valor de pares ${i}`)
    }



let numerosPrimitiva = [5, 4, 9, 3, 7, 2, 1]
let termine = false
console.log("antes:" + numerosPrimitiva)
//while(termine==true)
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




function NumerosPrimitiva() {
    let numeros = [];
    while(numeros.length < 6) {
        let numero = Math.floor(Math.random() * 49) + 1;
        if(!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    let reintegro = Math.floor(Math.random() * 10);
    numeros.push(reintegro);
    return numeros;
}

console.log(NumerosPrimitiva());   // Ejemplo: [7, 26, 35, 12, 48, 19, 3]