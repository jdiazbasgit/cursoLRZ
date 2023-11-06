console.log(`******      For - if      ******`);
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

//Forma 1
console.log(`******      Forma 1      ******`);
let numeros = [4, 7, 45, 35, 345, 90]
numero = 0
posicion = 0
while (numero < 200) {
    console.log(numeros[posicion]);
    numero = numeros[posicion + 1]
    posicion++
}
console.log(`Solo imprime hasta el 35 porque la siguiente posicion es 345  y como es mayor a 200 hay rompe la funcion`);
//Forma 2 - Mejor practica - Incremento antes a "posicion" y luego le asigno la posicion a numero

console.log(`******      Forma 2 - Mejor forma de hacerlo      ******`);
let numeros2 = [4, 7, 45, 35, 345, 90]
numero = 0
posicion = 0
while (numero < 200) {
    console.log(numeros2[posicion]);
    posicion++
    numero = numeros2[posicion]    
}

console.log(`******      Otro Ejemplo      ******`);
let numeros3 = [4, 7, 45, 35, 345, 90]
numero = 0
posicion = 0
while (numero < 200 || posicion===numeros3.length) {
    console.log("prueba:"+posicion);
    console.log(numeros3[posicion]);
    posicion++
    numero = numeros3[posicion]  
    posicion="pepe"
}
// Es un problema de induccion matematico 
// en un pueblo hay n habitantes,
// de los n hay m(1 a todos) que tienen un cartel en la espalda
// el alcalde dice el que tenga cartel se va del pueblo
// cuantos quedan en el pueblo?