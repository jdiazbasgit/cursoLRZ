

//function ver(botonParaPulsar) {
var ver = (botonParaPulsar) => {
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

var edad = 14
var salario = 50
if (edad <= 15) {
    salario = 20
    /*let edad=58
    console.log("dentro edad vale:"+edad)*/
}
console.log("slaario=" + salario)
edad++
console.log("fuera edad vale:" + edad)

//for(valor de inicio;condicion;incremento o decremento)
i = 0
for (let i = 0; i < 10; i++) {
    nombre = "mi nombre es\"javi\""
    n = `mi nombre es "javier"`
    console.log(`valor de i: ${i}`)
}

if (i % 2 != 0) {
    console.log(`valor de i: ${i}`)
    contador++
}

//arrays 

let numeros = new Array()
let numeros1 = []
if (true) {
    let numeros = 3
}
let numeros2 = [3, 6, 5, 7, 9, 34]
numeros2[5] = 15
console.log(numeros)
console.log(numeros1)
console.log(numeros2)
for (i = 0; i < numeros.length; i++)
    console.log(`valor del array: ${numeros2[i]}`)
numeros2.forEach(function (elemento) {
    console.log(`elemento dentro del foreach es: $(elemento+100)`)
})

let verNumeros = (fin) => {
    let divEjercicio1 = document.querySelector("#numeros")

    for (let i = 0; i < fin; i++) {
        if (i <= 50 && i % 2 == 0) {
            // console.log(`los pares menores de 50 son: ${i}`). En lugar de por consola lo voy a hacer en el html
            let h1Nuevo = document.createElement("h1")
            h1Nuevo.innerHTML = i
            if ((i <= fin / 2) && (i % 2 == 0)) {
                h1Nuevo.classList.add("bg-danger", "text-center")
                divEjercicio1.appendChild(h1Nuevo)
            }
            if ((i > fin / 2) && (i % 2 != 0)) {
                h1Nuevo.classList.add("bg-success", "text-center")
                divEjercicio1.appendChild(h1Nuevo)
            }
        }

    }

}



