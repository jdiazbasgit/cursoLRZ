

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
// dos formas... con un nuemro fijo de 100 y en segundo lugar con un parametro pasado desde HTML

function verNumeros1() {
    // creas una variable con el valor final de la serie
    let divEjercicio1 = document.querySelector("#ejercicio1")
    // cojes lo que tengas en ejercicio1 y lo metes en la variable divEjercicio1
    for (let i = 0; i < 100; i++) {
        let h1Nuevo = document.createElement("h1")
        // crea una variable h1Nuevo cuyo contenido va a ser un h1
        h1Nuevo.innerHTML = i
        // rellena ese h1 con el valor de i

        if ((i <= 50) && (i % 2 == 0)) {
            // si i es menor que la mitad de "fin" y es par
            h1Nuevo.classList.add("bg-danger", "text-center")
            // da a h1Nuevo esas caracteristicas bg color y centrado
            divEjercicio1.appendChild(h1Nuevo)
            // escribe el h1Nuevo dentro del contenedor divEjercicio1
        }
        if ((i > 50) && (i % 2 != 0)) {
            // para todos los impares superiores a la mitad del limite
            h1Nuevo.classList.add("bg-success", "text-center")
            divEjercicio1.appendChild(h1Nuevo)
        }
    }

}

let verNumeros = (fin) => {
    // creas una variable con el valor final de la serie
    let divEjercicio1 = document.querySelector("#ejercicio1")
    // cojes lo que tengas en ejercicio1 y lo metes en la variable divEjercicio1
    for (let i = 0; i < fin; i++) {
        let h1Nuevo = document.createElement("h1")
        // crea una variable h1Nuevo cuyo contenido va a ser un h1
        h1Nuevo.innerHTML = i
        // rellena ese h1 con el valor de i

        if ((i <= fin / 2) && (i % 2 == 0)) {
            // si i es menor que la mitad de "fin" y es par
            h1Nuevo.classList.add("bg-danger", "text-center")
            // da a h1Nuevo esas caracteristicas bg color y centrado
            divEjercicio1.appendChild(h1Nuevo)
            // escribe el h1Nuevo dentro del contenedor divEjercicio1
        }
        if ((i > fin / 2) && (i % 2 != 0)) {
            // para todos los impares superiores a la mitad del limite
            h1Nuevo.classList.add("bg-success", "text-center")
            divEjercicio1.appendChild(h1Nuevo)
        }
    }

}

let verNumeros2 = () => {
    let final = document.querySelector("#cantidad").value
    // creas una variable con el valor final de la serie
    let divEjercicio1 = document.querySelector("#ejercicio1")
    // cojes lo que tengas en ejercicio1 y lo metes en la variable divEjercicio1
    for (let i = 0; i < final; i++) {
        let h1Nuevo = document.createElement("h1")
        // crea una variable h1Nuevo cuyo contenido va a ser un h1
        h1Nuevo.innerHTML = i
        // rellena ese h1 con el valor de i

        if ((i <= final / 2) && (i % 2 == 0)) {
            // si i es menor que la mitad de "fin" y es par
            h1Nuevo.classList.add("bg-danger", "text-center")
            // da a h1Nuevo esas caracteristicas bg color y centrado
            divEjercicio1.appendChild(h1Nuevo)
            // escribe el h1Nuevo dentro del contenedor divEjercicio1
        }
        if ((i > final / 2) && (i % 2 != 0)) {
            // para todos los impares superiores a la mitad del limite
            h1Nuevo.classList.add("bg-success", "text-center")
            divEjercicio1.appendChild(h1Nuevo)
        }
    }

}

// vamos a ver el operador spread que se escribe con ...  tres puntitos

// function suma(...numeros){
let suma = (...numeros) => {
    // los ... hace que lo que viene detras sea un array, autodefinido, sin necesidad de declarar la variable
    let salida = 0

    numeros.forEach((numero) => {
        // el forEach se usa cuando tenemos colecciones de datos
        salida += numero
    })
    return salida;
}

console.log(suma(3, 4))
console.log(suma(3, 4, 56, 2, 74))
console.log(suma(3, 4, 56, 4, 67, 34, 23, 12, 3))

// comando indexOf. Me devuelve la posicion en la que se encuentra lo buscado
let texto = "123456789"
console.log("position:" + texto.indexOf(4))
console.log("position:" + texto.indexOf(0))
// me devuelve -1 si no existe en la cadena

// Vamos con el While..., mientras se cumpla la condición , ejecuto el codigo    while(condicion){}
// Si quiero que siempre se ejecute algo, al menos una vez, se usa el do while...., con la sintaxis   do{} while()

// Ejercicio de ordenamiento por el metodo de la burbuja 

let numerosPrimitiva = [5, 4, 9, 3, 7, 2, 1];
let termine = false;
// while termine==false; es igual que la siguiente pero menos eficiente
console.log("antes de ordenar:" + numerosPrimitiva)
while (!termine) {
    termine = true
    for (let i = 0; i < numerosPrimitiva.length - 1; i++) {
        if (numerosPrimitiva[i] > numerosPrimitiva[i + 1]) {
            termine = false
            let temporal = numerosPrimitiva[i + 1]
            // meto el segundo en un temporal para luego cambiarlo
            numerosPrimitiva[i + 1] = numerosPrimitiva[i]
            numerosPrimitiva[i] = temporal
        }
    }
}
console.log("despues de ordenar:" + numerosPrimitiva)

// otro de lo mismo....Calcular aleatoriamente los numeros de la primitiva (1 a 49) y ordénalo. Necesito "indexOf" (me dice si está o no en el array), para que no se repita; necesito incluir en un array, "push"; necesito mirar la longitud del array y que sea menor que 7; necesito generar un random (que es entre 0 y 1); necesito redondear el nuemro aleatorio (tofixed(0))

// verificacion de funcionamiento de cada una de las funciones
let prueba = []
prueba.push(5)
let random = (Math.random() * 100).toFixed(0)
prueba.push(random)
console.log("si el numero incluido es 5 y random prueba será " + prueba)
incluido1 = prueba.indexOf(4)
console.log("el rdo de comprobar si 4 esta incluido es " + incluido1)
let longitud1 = prueba.length
console.log("la longitud de prueba es: " + longitud1)

// Ahora el ejercicio en si

let numerosPrimitiva1 = new Array();

let numeroNuevo = () => {
    while (numerosPrimitiva1.length < 7) {
        let nuevoNumero = (Math.random() * 100).toFixed(0);
        if ((nuevoNumero >0 && nuevoNumero <= 49) && (numerosPrimitiva1.indexOf(nuevoNumero) === -1)) {
            numerosPrimitiva1.push(nuevoNumero)
        }
    }
}
numeroNuevo(); 
console.log("los numeros ganadores son:" + numerosPrimitiva1)

