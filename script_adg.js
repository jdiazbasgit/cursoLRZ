

function ver(botonParaPulsar) {
    console.log(botonParaPulsar.classList)
   var divContenedor=document.querySelector("#divContenedor")
    var h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = "has pulsado el boton"
    divContenedor.classList.add("bg-danger")
    divContenedor.appendChild(h1Nuevo)
    //var boton=document.querySelector("#boton")
    botonParaPulsar.classList.remove("bg-danger")
    botonParaPulsar.classList.add("bg-success")
}

var edad=15

if(edad<=15)
{
    let edad=58
    console.log("dentro edad vale:" +edad)
}
// edad=edad+1
edad++
console.log("fuera edad vale:"+edad)

// for(valor de inicio;condicion;incremento o decremento)

let contador=0;

for(let i=0;i<10;i++){

    // nombre="mi nombre es/javier"


    if(i%2==0) //numeros pares//
    console.log(`valor de i:${1}`)
    contador++
}
console.log(`elnumero de elemntos es ${contador}`)
  
let numeros= new Array()
let numeos1=[]
if(true){
    let numeros=3
}
let numeros2=[3,6,5,7,9,34]

numero2[5]=15
console.log(numeros)
console.log(numeros1)
console.log(numeros2)

for(i=0;i<numeros2.length;i++)
console.log(`valor del array:${numeros2[i]}`) //recorer el array//

numero2.forEach(function(e) {
    // console.log(`elemento dentro del forEach es:${e+100}`) //iterar el array//
    e.forEach(function(e1){   //funciones anonimas//
        console.log(e)
        for(i=0;i<e.length;i++)
        console.log(e[i])

    })
})
    // var ver=(botonParaPulsar)=>{ }  Arrow function
    //numero2.forEach( (e)=>{})


