import { Instrumento } from "../clases/intrumento_JCGA.js";
import { Musico } from "../clases/musico_JCGA.js";

document.querySelector("#solista").addEventListener("click", function () {

    // Ejemplo con la clase con (tipo, instrumentos)
    // let tambor = new Instrumento("pom, pom, pom")
    // // creo, con el constructor, un nuevo instrumento (new + Clase +(sonido)), pasandole el sonido
    // let instrumentos=new Array()
    // //let instrumentos=[tambor]
    // //instrumentos.push(tambor) Este es el más moderno como sintaxis
    // instrumentos[0]=tambor
    // let solista=new Musicoc
    // solista.tocar()
    
    let tambor = new Instrumento("pom, pom, pom")
    let solista = new Musico("solista", tambor)
    // como tengo definido el musico como ("tipo", ...instrumento), simplemente le paso uno a uno los instrumentos
    solista.tocar()
    // vamos a escribirlo en pantalla
    let h1tipo = document.createElement("h1")
    h1tipo.innerHTML = `el tipo de musico es ${solista.tipo}`
    let divContenido = document.querySelector("#concierto")
    limpiaElemento(divContenido)
    divContenido.appendChild(h1tipo)

    solista.instrumentos.forEach(element => {
        let h1sonido = document.createElement("h1")
        h1sonido.innerHTML = `El sonido de tu instrumento es ${element.sonido}`
        let divContenido = document.querySelector("#concierto")
        divContenido.appendChild(h1sonido)
    });
})

// podriamos haber metido un switch para verificar si me selecciona solo un instrumento y ejecutar este directamente
// let conciertoSolista=()=>{  
// switch(solista.instrumetnos.length){
//     case 1:
//         solista.tocar()
//         break
//     case 0:
//         console.log("no tienes nada que tocar")
//         break
//     default:
//         console.log("tu eres un hombre orquesta")
// }}
// Si metemos el switch, por buenas practicas deberíamos meter todos los textos en una constante (MENSAJE_NO_INSTRUMENTO="no tienes nada que tocar")

document.querySelector("#hombreOrquesta").addEventListener("click", function () {
    let tambor = new Instrumento("pom, pom, pom")
    let trompeta = new Instrumento("tu, tu, tun")
    let guitarra = new Instrumento("tlan,tlan, tlan")
    let hombreOrquesta = new Musico("varios", tambor, trompeta, guitarra)
    hombreOrquesta.tocar()
    // vamos a escribirlo en pantalla
    let h1tipo = document.createElement("h1")
    h1tipo.innerHTML = `el tipo de musico es ${hombreOrquesta.tipo}`
    let divContenido = document.querySelector("#concierto")
    limpiaElemento(divContenido)
    divContenido.appendChild(h1tipo)

    hombreOrquesta.instrumentos.forEach(element => {
        let h1sonido = document.createElement("h1")
        h1sonido.innerHTML = `El sonido de tu instrumento es ${element.sonido}`
        let divContenido = document.querySelector("#concierto")
        divContenido.appendChild(h1sonido)
    });
})

// deberiamos hacer una funcion tipo limpia() donde antes de lanzar la función x() le hacemos que limpie la pantalla
let limpiaElemento=(elementoALimpiar)=>{
    elementoALimpiar.innerHTML="";
}

// nueva función para los seleccionados

document.querySelector("#orquesta").addEventListener("click", function () {
    
    
    
    let tambor = new Instrumento("pom, pom, pom")
    let trompeta = new Instrumento("tu, tu, tun")
    let guitarra = new Instrumento("tlan,tlan, tlan")
    let instrumentosSeleccionados = new Array()
    var checked =document.querySelectorAll("#instrumentos:checked");
    console.log(checked)
    var selected = [...checked].map(option => option.value);
    console.log(+selected)

    // var checked = document.querySelectorAll('#pets :checked');
    // var selected = [...checked].map(option => option.value);

    for(instrumento in instrumentos.options[instrumentos.selectedIndex].value){
    let seleccion = instrumentosSeleccionados.options[instrumentos.selectedIndex].value;
    instrumentosSeleccionados.push("value")
    let orquesta = new Musico("orquesta", instrumentosSeleccionados)}
    orquesta.tocar()

    // var idprovincia = document.getElementById("idprovincia");
    // var pro = idprovincia.options[idprovincia.selectedIndex].value;


    console.log("Los instrumentos seleccionados son " +instrumentosSeleccionados)
    
    // var seleccion = new Array()
    // seleccion = instrumentosSeleccionados.options[instrumentos.selectedIndex].value;
    console.log("la seleccion es " +seleccion)
})
// Nos traemos los valores de la selección
    // var instrumentosSeleccionados = new Array()
    // instrumentosSeleccionados =document.getElementById("instrumentos");
    // // instrumentos.selectedIndex.forEach(seleccion =>{
    // for(value in instrumentos.selectedIndex){
    //     var newSeleccion = instrumentosSeleccionados.options[instrumentos.selectedIndex].value;
        
    //     console.log(newSelecion)
    // }
    
        // let newSeleccion=instrumentos.selectedIndex.value;
        // console.log(newSeleccion)
    // })
    // hombreOrquesta.instrumentos.forEach(element => {
    

    // let tambor = new Instrumento("pom, pom, pom")
    // let trompeta = new Instrumento("tu, tu, tun")
    // let guitarra = new Instrumento("tlan,tlan, tlan")
    // let orquesta = new Musico("varios", [instrumentosSeleccionados])
    // orquesta.tocar()
    // // vamos a escribirlo en pantalla
    // let h1tipo = document.createElement("h1")
    // h1tipo.innerHTML = `el tipo de musico es ${hombreOrquesta.tipo}`
    // let divContenido = document.querySelector("#concierto")
    // divContenido.appendChild(h1tipo)

    // hombreOrquesta.instrumentos.forEach(element => {
    //     let h1sonido = document.createElement("h1")
    //     h1sonido.innerHTML = `El sonido de tu instrumento es ${element.sonido}`
    //     let divContenido = document.querySelector("#concierto")
    //     divContenido.appendChild(h1sonido)
    // });


// document.querySelector("#seleccion").addEventListener("click",function(){
//     let tambor=new Instrumento("pom, pom, pom")
//     let trompeta=new Instrumento("tu, tu, tun")
//     let guitarra=new Instrumento("tlan,tlan, tlan")

//     let orquesta=new Musico("orquesta,instrumentos)
//     let instrumentos=new Array
//     instrumentos.foreach((instrumentos.value)=>{
//         instrumentos.push(value)

//     })
// EJEMPLO de como funcionaria
//Guardamos en una variable el nombre del campo provincia.
// var idprovincia = document.getElementById("idprovincia");
// var pro = idprovincia.options[idprovincia.selectedIndex].value;
// //Creamos un nodo de texto que agregaremos al div.
// var pro_valor = document.createTextNode("Provincia: "+pro);
// //Añadimos el nuevo nodo al final de la lista.
// div.appendChild(pro_valor);

// let seleccion=new Array()
// console.log(+instrumentos.value)
// })
//     let hombreOrquesta=new Musico([tambor,trompeta,guitarra],"varios")
//     hombreOrquesta.tocar()
// })

// let selectInstrumentos=document.querySelector("#instrumentos")
//     console.log(selectInstrumentos.options)

//     let h1tipo=document.createElement("h1")
//     let h1sonido=document.createElement("h1")
//     h1tipo.innerHTML=`el tipo de musico es ${this.tipo}`
//     h1sonido.innerHTML=`El sonido de tu instrumento es ${instrumento.sonar()}`
//     let divContenido=document.querySelector("#concierto")
//     divContenido.appendChild(h1tipo)
//     divContenido.appendChild(h1sonido)