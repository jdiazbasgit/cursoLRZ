

function ver(botonParaPulsar) {
    console.log(botonParaPulsar.classList)
    var divContenedor = document.querySelector("#divContenedor")
    var h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = "has pulsado el boton"
    divContenedor.classList.add("bg-danger")
    divContenedor.appendChild(h1Nuevo)
    //var boton=document.querySelector("#boton")
    botonParaPulsar.classList.remove("bg-danger")
    botonParaPulsar.classList.add("bg-success")

    /*var edad = 15
    if (edad <= 15) {
        let edad = 58
        console.log("dentro edad vale;" + edad)
    }
    console.log("fuera edad vale;" + edad)
    //comilla simple control + ?*/
}


//for(valor de inicio; condicion que tengo  que cumplir;incremento o decremento)

/*for(let i=0;i<10;i++){
    console.log(`valor de i: ${i}`)

}*/

/*for (let i = 0; i < 50; i++)
    if (i % 2 != 0) {
        console.log(`valor de impares: ${i}`)


    }
for (let i = 50; i <= 100; i++)
    if (i % 2 == 0) {
        console.log(`valor de pares: ${i}`)


}*/

let verNumeros=(fin)=>{
    let divEjercicio1 = document.querySelector("#ejercicio1")
    for (let i = 0; i < fin; i++) {   
        let h1 = document.createElement("h1")
        h1.innerHTML = i  
        if ((i <= fin/2) && (i % 2 == 0)) {          
            h1.classList.add("text-center","bg-danger")
            divEjercicio1.appendChild(h1)
        }
        if (i > fin/2 && i % 2 != 0) {          
            h1.classList.add("text-center","bg-success")
            divEjercicio1.appendChild(h1)
        }              
    }
}
