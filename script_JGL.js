

// Se podría utilizar también un arrow function y sería así:
// var ver=(botonParaPulsar)=> {

function ver(botonParaPulsar) {
    console.log(botonParaPulsar.classList)
    let divContenedor = document.querySelector("#divContenedor")
    var h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = "has pulsado el boton"
    divContenedor.classList.add("bg-danger")
    divContenedor.appendChild(h1Nuevo)
    //var boton=document.querySelector("#boton")
    botonParaPulsar.classList.remove("bg-danger")
    botonParaPulsar.classList.add("bg-success")

    var edad = 14;
    if (edad !== 15) {
        let edad = 58;
        console.log("dentro edad vale: " + edad)
    }
    else {
        console.log("Vale otra cosa")
    }

    console.log("fuera edad vale: " + edad);

    // for(valor de inicio;condición;incremento/decremento)

    // for(let i=0;i<10;i++){
    //     console.log(`Valor de i: ${i}`)
    // }

    for (let o = 2; o < 10; o += 2) {
        console.log(`Valor de o: ${o}`)
    }

    let contador = 0;

    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            console.log(`Valor de i: ${i}`)
            contador++
        }
    }

    console.log(`el numero de elementos es ${contador}`)

    let numeros = new Array();

    let numeros1 = [];

    let numeros2 = [3, 6, 5, 7, 9, 34];

    console.log(numeros);
    console.log(numeros1);
    console.log(numeros2);

    // for (i = 0; i < numeros2.length; i++)
    //     console.log(`valor del array ${numeros2[i]}`)

    // numeros2.forEach(function (e) {
    //     console.log(`elemento dentro del forEach es: ${e + 100}`)
    // })

    // numeros2.forEach(function (e) {
    //     console.log(e)
    //     for (i = 0; i < e.length; i++)
    //         console.log(e[i])
    // })

    // Esto es igual que lo de debajo

    // numeros2.forEach( (e) => {
    //     console.log(e)
    //     for (i = 0; i < e.length; i++)
    //         console.log(e[i])
    // })

    // Sacar por consola del 1 al 100, de los 50 primmeros los pares y de los 50 segundos los impares


    for (let p = 0; p < 50; p += 2)
        console.log(p)

    for (let i = 50; i < 100; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

// let verNumeros=(fin)=> {


function verNumeros(fin) {
    let divEjercicio1 = document.querySelector("#ejercicio1")
    for (let i = 0; i < fin; i++) {
        let h1 = document.createElement("h1")
        if ((i <= fin / 2) && (i % 2 == 0)) {
            h1.innerHTML = i
            h1.classList.add("bg-danger")
            divEjercicio1.appendChild(h1)
        }
        if ((i > fin / 2 && i % 2 != 0))
            h1.innerHTML = i
        h1.classList.add("bg-success")
        divEjercicio1.appendChild(h1)
    }
}


// SPREAD: se le indica a la función que llega un número indeterminado de parámetros y se trata como un ARRAY

let suma = (...numeros) => {

    let salida = 0;
    numeros.forEach((numero) => {
        salida += numero
    });
    return salida;

};

// console.log(suma(3, 4))
// console.log(suma(3, 4, 5, 6, 67))
// console.log(suma(3, "a", 5, 6, 67))


/* 

Bucle WHILE: while(condicion){
    ejecuto este codigo
 } 

Bucle doWhile (primero se ejecuta y luego se pone la condición por lo que siempre se ejecuta mínimo una vez)
do{
    ejecuto este codigo
}while{condicion}
 } 

 */


let numAleatorios = [];
let numRepetidos = [];
// const numerosSorteo = 6;

let termine = false;
// console.log("antes de ordenar " + numerosPrimitiva);
// while (termine == true){}

// La siguiente función simplemente ordena los números de menor a mayor

let ordenar = () =>{

//function ordenar() {
    while (!termine) {                                                              // mientras no termine ejecuto el codigo
        termine = true // Damos por supuesto que la condición es true
        for (let i = 0; i < numAleatorios.length - 1; i++) {
            if (numAleatorios[i] > numAleatorios[i + 1]) { // Aquí comparo si el número de la posición i(empieza en 0) es mayor o no que el número de la posición i+1
                termine = false // Como no se cumple la condición supuesta de termine = true se ejecuta el siguiente código
                let temporal = numAleatorios[i + 1] // Doy una variable al número de la posición i+1 para poder cambiarlo
                numAleatorios[i + 1] = numAleatorios[i] // Paso el número de i+1 a i porque i es mayor
                numAleatorios[i] = temporal // Paso el número de i a la posición i+1
            }
        }
    }
}

// Con esta función saco números aleatorios ("numAleatorio") entre 1 y 49 y evita que se repitan al incluirse en el ARRAY "numAleatorios"
let darNumero = (numerosSorteo) => {
// function darNumero() {

    while (numAleatorios.length < numerosSorteo) {
        // for (let i = 0; numAleatorios.length < 6; i++) {                         // Esto lo comento porque me ha salido bien pero creo que no tiene sentido
        let numAleatorio = Math.floor(Math.random() * 100);
        if ((numAleatorio >= 1 && numAleatorio <= 49) && (!numAleatorios.includes(numAleatorio))) {
            numAleatorios.push(numAleatorio)
        }

        if (numAleatorio < 1 || numAleatorio > 49 || numAleatorios.includes(numAleatorio)) {
            numRepetidos.push(numAleatorio)
        }

    }

    // ordenar(numAleatorios)

    numAleatorios.sort((a, b) => a - b); // En una función ARROW si la ejecución es un "return" 
    //se puede quitar la palabra y las {}

    return numAleatorios;

    let h1 = document.createElement("h1")
    numAleatorios.forEach(numAleatorio => {
        h1.innerHTML = `${h1.innerHTML} ${numAleatorio}`
        h1.innerHTML = numAleatorios.join(" - ")
    })

    document.querySelector("#primitiva").appendChild(h1)

}

 // darNumero(); Si no invoco la función no pasa nada, a partir de aquí ya tengo los 6 números y están ordenados para poder verlos y operar con ellos

console.log(darNumero(6));

console.log(`Los numeros repetidos o que no valen son ${numRepetidos}`);

let numAleatoriosLong = numAleatorios.length
let numRepetidosLong = numRepetidos.length

let intentos = numAleatoriosLong + numRepetidosLong

console.log(`He tenido que meter ${intentos} para conseguir 6 números aleatorios entre 1 y 49 no repetidos`)

let numerosPremiados = [5, 4, 9, 3, 7, 2, 1];

function premio() {

    if (numerosPremiados == numAleatorios) {
        console.log("Enhorabuena, has sido el ganador de la primitiva")
    }

    if (numerosPremiados != numAleatorios) {
        console.log(`Lo sentimos mucho, recarga la página para seguir jugando. Los números ganadores son ${numerosPremiados}`)
    }
}

premio();










