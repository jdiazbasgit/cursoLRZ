

function ver(botonParaPulsar) {
    // podriamos usar una arrow function "var ver=(botonParaPulsar)=>{"
    console.log(botonParaPulsar.classList)
    var divContenedor = document.querySelector("#divContenedor")
    var h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = "has pulsado el boton"
    divContenedor.classList.add("bg-danger")
    divContenedor.appendChild(h1Nuevo)
    //var boton=document.querySelector("#boton")
    botonParaPulsar.classList.remove("bg-danger")
    botonParaPulsar.classList.add("bg-success")

    var edad = 15;
    var salario = 50;
    if (edad <= 15)
        salario = 20
    let edad1 = 58;
    console.log("dentro edad vale:" + edad1);
// al no tener el ; considera que solo la primera linea es parte del if

    edad++
    // ++ añade 1 al valor edad

    console.log("el salario vale:" + salario)
    console.log("fuera la edad vale:" + edad);

// for(valor de inicio;condicion;incremento o decremento)
// uso ` ` y ${var} para simplificar
// Incremento de 2 en 2 el valor con la sintaxis i+=2
for (let i=0;i<10;i+=2){
    console.log(`valor de i: ${i}`)
}
// los arrays van desde el 0 hasta su longitud... un array de 10, va del elemento 0 al 9

// iterar un array no es recorrer, sino recorrer mientras haya elementos. Para eso se utiliza el "for each"

// vamos a imprimir solo los pares

for (let i=0;i<100;i++){
    if(i%2 !=0)
           console.log(`valor de i: ${i}`)
  }

// arrays  . Es lo mismo definirlo como Array() que lo considera una función que es un array , que si lo marcas como []
let numeros=new Array()
let numeros1=[]
let numeros2=[[3,4,6,8,3],[7,8,34]]
numeros2[4]=25
console.log(numeros)
console.log(numeros1)
console.log(numeros2)


for(i=0;i<numeros.length;i++)
console.log(`valor del array: ${numeros2[i]}`)

// el forEach se suele usar, para despreocuparme del tamaño del array
numeros2.forEach(function(e){
    console.log(`elemento dentro del foreach es: ${e+100}`)
})

/* con arrow function, quedaria como
numeros2.forEach((e)=>{
    console.log(`elemento dentro del foreach es: ${e+100}`)
})*/


// Vamos con otra cosa...


}


