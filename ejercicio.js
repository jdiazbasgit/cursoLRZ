
// for (let i = 0; i < 50; i++) {
//     if ((i % 2) == 0) {
//         console.log(i);
//         let contenedorpares = document.querySelector("#contenedorpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center","bg-danger");
//         contenedorpares.appendChild(h1Nuevo);

//     }
// }


// for (var i = 51; i < 100; i++) {
//     if ((i % 2) != 0) {
//         console.log(i)
//         let contenedorimpares = document.querySelector("#contenedorimpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center","bg-success");

//         contenedorimpares.appendChild(h1Nuevo);
//     }
// }

// let fin = 100;
// for (let i = 0; i <= fin; i++) {
//     if ((i % 2 == 0) && (i <= fin / 2)) {
//         console.log(i);
//         let contenedorpares = document.querySelector("#contenedorpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center", "bg-danger");
//         contenedorpares.appendChild(h1Nuevo);

//     }
//     if ((i % 2 != 0) && (i > fin / 2)) {
//         console.log(i)
//         let contenedorimpares = document.querySelector("#contenedorimpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center", "bg-success");
//         contenedorimpares.appendChild(h1Nuevo);
//     }
// }
// // function suma(...numeros) esto equivale a la linea 48
// let suma = (...numeros) => { //los tres puntos es un spread es un array de coleccion
//     let salida = 0;
//     numeros.forEach((elemento) => { //por cada elemento de la coleccion numeros
//         salida += elemento; //es lo mismo que poner salida = salida + elemento
//     })
//     return salida;

// }

// console.log(suma(3, 4))
// console.log(suma(3, 4, 56, 78, 5, 6, 7))
// console.log(suma(3, 4, 1234, 89, 6, 8, 8, 4, 3, 2, 3, 4, 54, 5, 6, 67))


// let divEjercicio1 = document.querySelector(#ejercicio1")
// for (let i= <100)


// let i=0
// while(i<400){

// }

// array de 5 elementos numericos y ordenarlos metodo burbuja

// let numerosPrimitiva = [5, 4, 9, 3, 7, 2, 1];
// let termine = false;
// console.log("antes:" + numerosPrimitiva);
// // while(termine==false)
// while (!termine) {
//     termine = true;
//     for(let i=0;i<numerosPrimitiva.length-1;i++){
//         if(numerosPrimitiva[i]>numerosPrimitiva[i+1]){
//         termine=false;
//         let temporal=numerosPrimitiva[i+1];
//         numerosPrimitiva[i+1]=numerosPrimitiva[i];
//         numerosPrimitiva[i]=temporal;
//         }
//     }

// }
// console.log("despues:" + numerosPrimitiva);

// hacer un array de 6 elemtos y que me vaya generando los numeros de la loteria que no se repitan y que esten entre 1 y 49

// let numPrimitiva=[...numeros]
// while (numPrimitiva.length-1<6) {
// for(let i=0;i++){
// let numPrimitiva=parseInt(Math.random()*100);
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// var aleatorio = Math.random();
// function aleatorio(inferior, superior) {
//     var superior=49
//     var inferior=0
//     var numPosibilidades = superior - inferior;
//     var aleatorio = Math.random() * (100);
//     aleatorio = Math.floor(aleatorio);
//     return numPosibilidades;
//     console.log(aleatorio);
// while (numPrimitiva.length-1<6) {
//     for(i=0;i<6;i++)
//     }
// }



let numPrimitiva = new Array();
for (i = 0; i < 6; i++) {
    numPrimitiva[i] = Math.floor(Math.random() * 49) + 1;
}
console.log("los numeros de la primitiva antes de ordenar: " + numPrimitiva)

let termine = false;
// while(termine==false)
while (!termine) {
    termine = true;
    for (let i = 0; i < numPrimitiva.length - 1; i++) {
        if (numPrimitiva[i] > numPrimitiva[i + 1]) {
            termine = false;
            let temporal = numPrimitiva[i + 1];
            numPrimitiva[i + 1] = numPrimitiva[i];
            numPrimitiva[i] = temporal;
        }
    }
} 

console.log("los numeros de la primitiva despues de ordenar: " + numPrimitiva)

// function resultado() {
//     let numPrimitiva = new Array();
//     let termine = false;
//     while (!termine) (numPrimitiva.length - 1 < 6);
//         for (i = 0; i < 6; i++) {
//             if (numPrimitiva[i] > numPrimitiva[i + 1])
//         }
// }

// codigo del profesor
// let numerosPrimitiva = new Array ()

// otra opcion profe


