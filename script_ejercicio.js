//function verNumeros1(){
// let verNumeros = () => {
//     let divEjercicio1 = document.querySelector("#ejercicio1")
//     for (let i = 0; i < 100; i++) {
//         let h1Nuevo = document.createElement("h1")
//         h1Nuevo.innerHTML = i
//         if (i % 2 != 0) {
//             h1nuevo.classList.add("bg-danger")
//             divEjercicio1.appendChild(h1Nuevo)
//         }
//     }
// //for (let i = 0; i < 100; i++) { 

// if (i % 2 == 0) { 
// let h1Nuevo = document.createElement("h1") 
// h1Nuevo.innerHTML = i
// h1nuevo.classList.add("bg-danger")
// divEjercicio1.appendChild(h1Nuevo)
// }
//}
//function suma(... numeros){//la variable suma recibira cualquier cantidad de parametros
let suma = (...parametros) => {//la variable suma recibira cualquier cantidad de parametros, desde cero hasta n cantidad de nuemros o caracteres
    let salida = 0 // creo una variable donde voy almacenar el resultado y lo inicializo en 0
    parametros.forEach((numero) => {   //por cada vuelta sumo el numero
        salida += numero
    })
    return salida;
    let divEjercicio1 = document.querySelector("#ejercicio1")
    let h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = salida
    h1nuevo.classList.add("bg-danger")
    divEjercicio1.appendChild(h1Nuevo)
}
console.log(suma(3, 4))
console.log(suma(3, 4, 5, 8, 3, 4))
console.log(suma(3, 4, 654, 9875, 659, 4))
console.log(suma(3, 4, 587, 65, 15, 89))
console.log(suma(3, 4, 871, 654, 6498))
console.log(suma())

let texto = "458978534"
console.log("Posición: " + texto.indexOf("4"))   // Muestra por consola la posicion que ocupa el primer numero 4 dentro del texto indicado
console.log("Posición: " + texto.lastIndexOf("4"))   // Muestra por consola la posicion que ocupa el ultimo numero 4 dentro del texto indicado


//1ra condicion - evaluo antes de hacer algo
// while (condition){ 
// }

// segunda condicion - Evaluo y la proceso al menos una vez
// do{ 
// }
// while(condition)

let numerosPrimitiva = [5, 4, 9, 3, 7, 2, 1]  //Creo un array con n cantidad de valores
let terminé = false // lo declaro false para que pueda pasar de la consulta del (while(!terminé) y entrar al bucle "for" si no tendria que usar la condiciòn "do while"
//while (termine==true)
console.log("Antes:   " + numerosPrimitiva) // Muestrame por consola los valores antes de empezar a ordenarlos
while (!terminé) // Mientras no terminé, es decir, sea false entonces entro al bucle
{
    terminé = true
    for (let i = 0; i < numerosPrimitiva.length - 1; i++) {    //inicializo la variable i=0 y digo mientras que i sea menor que numerosPrimitiva
        if (numerosPrimitiva[i] > numerosPrimitiva[i + 1]) {     //si cumplo la condicion que numerosPrimitiva de i es mayor que numerosPrimitivade i+1 es que estan cambiados
            terminé = false
            let temporal = numerosPrimitiva[i + 1] //guardo el valor de i en un temporal
            numerosPrimitiva[i + 1] = numerosPrimitiva[i]
            numerosPrimitiva[i] = temporal
        }
    }
}
console.log("Después: " + numerosPrimitiva)

// Generar 06 numeros aleatorios para jugar la primitiva

function numAle1(min, max) {
    min = Math.ceil(1);
    max = Math.floor(49);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = (numAle1())
let num2 = (numAle1())
let num3 = (numAle1())
let num4 = (numAle1())
let num5 = (numAle1())
let num6 = (numAle1())


let numPri = [num1, num2, num3, num4, num5, num6]  //Creo un array con n cantidad de valores
let ordenado = false // lo declaro false para que pueda pasar de la consulta del (while(!terminé) y entrar al bucle "for" si no tendria que usar la condiciòn "do while"
//while (termine==true)
console.log("Antes:   " + numPri) // Muestrame por consola los valores antes de empezar a ordenarlos
while (!ordenado) // Mientras no terminé, es decir, sea false entonces entro al bucle
{
    ordenado = true
    for (let i = 0; i < numPri.length - 1; i++) {    //inicializo la variable i=0 y digo mientras que i sea menor que numerosPrimitiva
        if (numPri[i] > numPri[i + 1]) {     //si cumplo la condicion que numerosPrimitiva de i es mayor que numerosPrimitivade i+1 es que estan cambiados
            ordenado = false
            let temporal = numPri[i + 1] //guardo el valor de i en un temporal
            numPri[i + 1] = numPri[i]
            numPri[i] = temporal
        }
    }
}
console.log("Después: " + numPri)
//console.log(numPri)


//Define la cantidad de numeros aleatorios.



var myArray = []
while (myArray.length < 6) {
    function numAle(min, max) {
        min = Math.ceil(1);
        max = Math.floor(49);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var numeroAleatorio = (numAle())
    var existe = false;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == numeroAleatorio) {
            existe = true;
            break;
        }
    }
    if (!existe) {
        myArray[myArray.length] = numeroAleatorio;
    }

}
//var numPri2 = [myArray]  //No hace falta declrar el array porque lo traigo de arriba listo con los 6 valores
let ordenados = false // lo declaro false para que pueda pasar de la consulta del (while(!ordenados) y entrar al bucle "for" si no tendria que usar la condiciòn "do while"
//while (termine==true)
console.log("Array Antes:   " + myArray) // Muestrame por consola los valores antes de empezar a ordenarlos
while (!ordenados) // Mientras no !ordenados, es decir, sea false entonces entro al bucle
{
    ordenados = true
    for (let i = 0; i < myArray.length - 1; i++) {    //inicializo la variable i=0 y digo mientras que i sea menor a la longitud (length) de mi array -1 
        if (myArray[i] > myArray[i + 1]) {     //si cumplo la condicion que el valor de la posicion 1 de i es mayor que el numero de la posicion i+1, es que estan cambiados
            ordenados = false
            let temporal2 = myArray[i + 1] //guardo el valor de i en un temporal
            myArray[i + 1] = myArray[i]
            myArray[i] = temporal2
        }
    }
}
console.log("Array Después: " + myArray)
document.write("La primitiva de hoy es : " + myArray);


