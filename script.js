edad = 28
const PI = 3.1416
console.log("tipo1:"+typeof(edad))
edad="pepe"
console.log("tipo2:"+typeof(edad))
/*
Tipos de datos
texto
numero
booleano(logico)
Array
Objeto
undefined y null

Operadores
aritmeticos
*+-/ % ^ **
asignacion
=
operadores lógicos

> < >= <= != !== == ===
 */

a = 5
b = "5"
console.log(a == b)
console.log(a === b)

texto = "a es menor o igual a 4"
if (a > 4)
    texto = "a es mayos que 4"
else
    console.log(texto);

texto = "a es menor o igual a 4"
if (a > 4)
    texto = "a es mayos que 4"
console.log(texto);

for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }

}
let numeros = [4, 7, 45, -8, 5.56, 5, 345, 90]
let numero = 0
posicion = 0
while (numero < 200 || posicion === numeros.length) {
    console.log(numeros[posicion])
    posicion++
    numero = numeros[posicion]


}

function suma(a, b) {
    return a + b;
}

//let suma=(a,b)=>a+b
let divContenido = document.querySelector("#contenido")
let botonCambiar= document.querySelector("#cambiar")
botonCambiar.addEventListener("click",function(){
divContenido.innerHTML=""
let img=document.createElement("img")
img.src="./camion.jpg"
img.width=200
img.height=100
divContenido.appendChild(img)

})


let boton= document.createElement("button")
boton.innerHTML="aregar fila"
boton.classList.add("bg-danger")
boton.addEventListener("click",function(){
    agregarFila()
})
divContenido.appendChild(boton)
let tabla = document.createElement("table")
tabla.border = 1
tabla.align="center"
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
    td1.innerHTML="pepe"
    td2.innerHTML="garcia"
    td3.innerHTML="8765435f"
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tabla.appendChild(tr)
}







