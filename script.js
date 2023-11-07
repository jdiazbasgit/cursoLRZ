edad = 28
const PI = 3.1416

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
let numeros = [4, 7, 45, -8,5.56, 5, 345, 90]
let numero = 0
posicion = 0
while (numero < 200 || posicion===numeros.length) {
    console.log(numeros[posicion])
    posicion++
    numero = numeros[posicion]
    
    
}



