

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

    var edad = 15
    if (edad<=15)
    {
        let edad= 58
        console.log("dentro edad vale: "+edad)
    }
    console.log("fuera edad vale: "+edad)

}
//for(valor de inicio; condicion incremento o decremento)

// for (let i = 0; i < 10; i++) {
//     console.log(`valor de i: ${i}`); 
// }

// for (let i = 0; i < 10; i+2) {
//     console.log(`valor de i: ${i}`); 
// }

    // for(let i=0; i<100;i++){
    //     if(i % 2 != 0 ){console.log(`valor de i: ${i}`)
    //     }
    // }

//  let numeros = new Array()
//  let numeros1 = []
//  let numeros2 = [3,6,5,34,25,8]

//  console.log(numeros); 
//  console.log(numeros1);
//  console.log(numeros2);

 // del 1 al 100 pares y los impares


