// se declaran variables con un nombre  y un valor para usarlas despues//

var edad = 28 // Numero, "string", boleanos ya no hace falta poner var

// let siempre dentro de un ambito

const PI = 1234567 // variable que no cambia de valor durante el tiempo de vida del objeto 
console.log("tipo1" + typeof(edad))
/* tipos de datos:
 texto, numero, booleano, array, objeto
undefined (no se a que te refieres), null(no hay nada)
Operadores:
aritmeticos: + - * / % **

asignacion: =
logicos: me devuleven siempre un boleano true/flase
 > 
 <
 >= 
 <= 
 !=
 !==
 == 
 === (compara valores y tipos)
*/

a = 4
b = "5"

console.log(a == b) // true
console.log(a === b) //false


// condicionales
texto = "a es menor o igual a 4"
if (a > 4)    //si cumplo la condicion hago algo.Entre los parentesis la condicion 
    // console.log ("a es mayor que 4")
    // else
    // console.log("a es menor o igual a 4");
    texto = "a es mayor que 4"
console.log(texto);


for (let i = 0; i < 10; i++) {  //se usa mas el foreach para elementos iterables
    // primero se inicializa;condicion;el incremento o decremento
    if (i % 3 === 0) {
        console.log(i);
    }
}

let numeros = [4, 7, 45, 8, 5, 345, 90]   //array
numero = 0
posicion = 0

while (numero < 200 || posicion === numeros.length) {  //mientras numero sea menor que 200 cumplo la condicion o lleges a la ultima posicion
    console.log(numeros[posicion]) // posicion de los numeros en el array
    posicion++ // vas aumentando la posicion
    numero = numeros[posicion] //

}
// numero siempre empiza por 0 las demás variables hay que inicializalas

//funciones para realiar una actividad
function suma(a, b) {//definicion de la funcion FIRMA DE LA FUNCION
    return a + b//CUERPO DE LA FUNCION
}
// suma()//llamada a la funcion

// se reducen con la sintaxis de arrow function
// let suma =(a,b)=>{
//     return a+b
// }
// let suma=(a,b)=>a+b // si solo tiene una linea en el cuerpo de la funcion


let divContenido = document.querySelector("#contenido")//señala el elemento
let botonCambiar = document.querySelector("#cambiar")
botonCambiar.addEventListener("click",function(){
    divContenido.innerHtml=""
    let img=document.createElement("img")
    img.src="./camion.jpg"
    img.width=200
    img.height=100
    divContenido.appendChild(img)
})

let tabla = document.createElement("table") //crea elemento en la var tabla

//en lugar del onclick//
// let boton = document.createElement("button")
// boton.innerHTML = "Agregar fila"
// boton.addEventListener("click", function () {
//     agregarFila()
// })
// divContenido.appendChild(boton)
tabla.border = 1
tabla.align = "center"
let trCabecera = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
th1.innerHTML = "nombre"
th2.innerHTML = "apellido"
th3.innerHTML = "dni"
trCabecera.appendChild(th1)
trCabecera.appendChild(th2)
trCabecera.appendChild(th3)
tabla.appendChild(trCabecera)
divContenido.appendChild(tabla)



let agregarFila = () => {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td1.innerHTML = "pepe"
    td2.innerHTML = "garcia"
    td3.innerHTML = "00000000"
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tabla.appendChild(tr)
}

// let divJson= document.querySelector("#json")
// divJson.innerHTML=JSON.stryngify(document)

//Metodologia de orientacion a Objetos// 14/11/23

//La class define el comportamiento de los objetos//

//todos los objetos que tienen las mismas propiedades son iguales//

//EVENTOS// 16/11/23

// function teclado(event){
//     let h1=document.querySelector("#h1")
//     let input=document.querySelector("#input")
//     input.value=input.value.toUppercase
//     console.log(event)
//     if(event.key ===" "){
        
//     return
//     }
    
//     h1.innerHTML=h1.innerHTML + event.key.toUppercase()
// }

function teclado(tecla) {
    let h1 = document.querySelector("#h1")
    let input=document.querySelector("#input")
    input.value=input.value.toUpperCase()
    console.log(tecla)
    if (tecla.key === " "){
        nombre="federiceo"
        console.log(nombre.substring(2))
        console.log(nombre.charAt(3))
        console.log(nombre.indexOf("ed"))
        console.log(nombre.replaceAll("e","-------"))
        console.log(nombre.lastIndexOf("edfdgdfg"))
        input.value=input.value.substring(0,input.value.length-1)
        return
    }
    h1.innerHTML=h1.innerHTML+tecla.key.toUpperCase()
}
