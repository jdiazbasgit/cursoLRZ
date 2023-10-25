

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

    var edad = 19
    var salario = 50
    if (edad <= 15)
        salario = 20
    let edad1 = 58
    console.log("dentro edad vale:" + edad1)



    console.log("salario=" + salario)
    edad++
    console.log("fuera edad vale:" + edad)

    //for(valor de inicio;condición;incremento o decremento)
    let contador = 0;
    for (let i = 0; i < 100; i++) {
        //nombre=" mi nombre es \"javier\""
        // n=`mi nombre es "javier"`

        if (i % 2 != 0) {
            console.log(`valor de i: ${i}`)
            contador++
        }
    }
    console.log(`el numero de elemntos es ${contador}`)

    let numeros = new Array()
    let numeros1 = []
    if (true) {
        let numeros = 3
    }
    let numeros2 = [
        [3, 6, 6, 6, 6, 5],
        [7, 9, 34]
    ]
    // numeros2[5] = true
    numeros2[1][2] = 316
    console.log(`longitud:${numeros2.length}`)
    console.log(numeros)
    console.log(numeros1)
    console.log(numeros2)
    for (i = 0; i < numeros2.length; i++)
        console.log(`valor del array: ${numeros2[i]}`)

    numeros2.forEach((e) => {
        console.log(e)
        for (i = 0; i < e.length; i++)
            console.log(e[i])

    })


}
//function verNumeros(){
let verNumeros = () => {
    let divEjercicio1 = document.querySelector("#ejercicio1")
    for (let i = 0; i < 100; i++) {
        let h1 = document.createElement("h1")
        h1.innerHTML = i
        if ((i <= 50) && (i % 2 == 0)) {
            h1.classList.add("text-center", "bg-danger")
            divEjercicio1.appendChild(h1)
        }
        if (i > 50 && i % 2 != 0) {
            h1.classList.add("text-center", "bg-success")
            divEjercicio1.appendChild(h1)
        }
    }


}

//function verNumeros1(){
let verNumeros1 = () => {
    let final = parseInt(document.querySelector("#cantidad").value)
    let divEjercicio1 = document.querySelector("#ejercicio1")
    for (let i = 0; i < final; i++) {
        let h1 = document.createElement("h1")
        h1.innerHTML = i
        if ((i <= final / 2) && (i % 2 == 0)) {
            h1.classList.add("text-center", "bg-danger")
            divEjercicio1.appendChild(h1)
        }
        if (i > final / 2 && i % 2 != 0) {
            h1.classList.add("text-center", "bg-success")
            divEjercicio1.appendChild(h1)
        }
    }


}
function verNumeros2(fin) {
    //let verNumeros=(fin)=>{
    let divEjercicio1 = document.querySelector("#ejercicio1")
    for (let i = 0; i < fin; i++) {
        let h1 = document.createElement("h1")
        h1.innerHTML = i
        if ((i <= fin / 2) && (i % 2 == 0)) {
            h1.classList.add("text-center", "bg-danger")
            divEjercicio1.appendChild(h1)
        }
        if (i > fin / 2 && i % 2 != 0) {
            h1.classList.add("text-center", "bg-success")
            divEjercicio1.appendChild(h1)
        }
    }


}

//function suma(... numeros){
let suma = (...numeros) => {
    let salida = 0
    numeros.forEach((numero) => {
        salida += numero
    })
    return salida;

}

console.log(suma(3, 4))
console.log(suma(3, 4, 56, 78, 5, 6, 7))
console.log(suma(3, 4, 1234, 89, 6, 8, 8, 4, 3, 2, 3, 4, 54, 5, 6, 67, 7))
console.log(suma(3, 4, 4))
console.log(suma(3))
console.log(suma())

let texto = "19230456789"
console.log("posicion:" + texto.indexOf("9"))
console.log("posicion final:" + texto.lastIndexOf("9"))

/*
while(condicion){


}

do{

}while(condicion)

*/

























console.log("despues:" + numerosPrimitiva)