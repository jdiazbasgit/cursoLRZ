
// // for(let i=2;i<51;i+=2){
// //     console.log(`valor de i: ${i}`)
// // }

// // for( i=51;i<101;i+=2){
// //     console.log(`valor de i: ${i}`)
// // }

// //recorrido los numeros pares e impares


// for (let i = 0; i < 51; i++) {
//     if (i % 2 == 0) {
//         // console.log(`valor i: ${i}`)
//         let numerosPares = document.querySelector("#numeros pares")
//         let h1Nuevo = document.createElement("h1")
//         h1Nuevo.innerHTML = i
//         h1Nuevo.classList.add("bg-danger")
//         h1Nuevo.classList.add("text-center")
//         numerosPares.appendChild(h1Nuevo)

//     }

// }

// for (i = 51; i < 101; i++) {

//     if (i % 2 != 0) {
//         //         console.log(`valor i: ${i}`)
//         let numerosImpares = document.querySelector("#numeros impares")
//         let h1Nuevo = document.createElement("h1")
//         h1Nuevo.innerHTML = i
//         h1Nuevo.classList.add("bg-succes")
//         h1Nuevo.classList.add("text-center")
//         numerosPares.appendChild(h1Nuevo)
//     }
// }


// function verNumeros() {
//     // let verNumeros=(fin)=>{
//     let divEjercicio1 = document.querySelector(#ejercicio1)
//     for (let i = 0; i < fin; i++) {
//         let h1 = document.createElement("h1")
//         h1.innerHTML = i
//     }

//     if ((i <= fin / 2) && (i % 2 == 0)) {
//         h1.classList.add("text-center", "bg-danger")
//         divEjercicio1.appendChild(h1)

//     }
//     if (i > fin / 2 && i % 2 != 0) {
//         h1.classList.add("text-center", "bg-success")
//         divEjercicio1.appendChild(h1)
//     }







//     function verNumeros1() {
//         // let verNumeros=(fin)=>{
//         let final = parseInt(document.querySelector("#cantidad"))
//         let divEjercicio1 = document.querySelector(ejercicio1)
//         for (let i = 0; i < fin; i++) {
//             let h1 = document.createElement("h1")
//             h1.innerHTML = i
//         }

//         if ((i <= fin / 2) && (i % 2 == 0)) {
//             h1.classList.add("text-center", "bg-danger")
//             divEjercicio1.appendChild(h1)

//         }
//         if (i > fin / 2 && i % 2 != 0) {
//             h1.classList.add("text-center", "bg-success")
//             divEjercicio1.appendChild(h1)
//         }

//     }


// }
// function verNumeros2(fin) {
//     // let verNumeros=(fin)=>{
//     let divEjercicio1 = document.querySelector(ejercicio1)
//     for (let i = 0; i < fin; i++) {
//         let h1 = document.createElement("h1")
//         h1.innerHTML = i
//     }

//     if ((i <= fin / 2) && (i % 2 == 0)) {
//         h1.classList.add("text-center", "bg-danger")
//         divEjercicio1.appendChild(h1)

//     }
//     if (i > fin / 2 && i % 2 != 0) {
//         h1.classList.add("text-center", "bg-success")
//         divEjercicio1.appendChild(h1)
//     }
// }



// // function suma(...numeros){}

// let suma = (...numeros) => {  //spread//
//     let salida = 0
//     numeros.forEach((numero) => {
//         salida += numero
//     })

//     return salida;
// }

// console.log(suma(4, 3))
// console.log(suma(4, 3, 4, 3, 2, 1, 1, 11, 1))
// console.log(suma(4, 3))
// console.log(suma(4,))


// let texto = "1234567489"
// console.log("posicion:" + texto.indexOf("4"))
// console.log("posicion final:" + texto.lastIndexOf("4"))


// while(condicion){          hace la funcion mientras se cumpla la condicion

// }

// do{             hace la funcion al menos 1 vez aunque no cumpla

// }while(condicion)

// let i = 0
// while (i < 400) {

// }

let numerosPrimitiva = [5, 4, 9, 3, 7, 2, 1]
let termine = false
// while(termine==true)

console.log("antes: " + numerosPrimitiva)
while (!termine) {
  termine = true
  for (let i = 0; i < numerosPrimitiva.length - 1; i++) {
    if (numerosPrimitiva[i] > numerosPrimitiva[i + 1]) { // el elemento es mayor que el siguiente?
      termine = false
      let temporal = numerosPrimitiva[i + 1] // guarda el valor del segundo
      numerosPrimitiva[i + 1] = numerosPrimitiva[i] //invierte el valor
      numerosPrimitiva[i] = temporal // invierte el valor

    }

  }
}
console.log("despues :" + numerosPrimitiva)


// 6 numeros aleatorios del 1 al 49 y que no se repitan//


// function numRandomInt(max, min) {
//   return Math.floor(Math.random() * 49);

// }

// let numPrimitiva = Array.from({ length: 6 }, () =>
//   Math.floor(Math.random() * 6));

// for (i = 1; i < numPrimitiva.length - 1; i++) {

  // if (condition) {

// }


//   console.log(numRandomInt())
