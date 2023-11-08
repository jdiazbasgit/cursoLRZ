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
let limpiaElemento = (elementoALimpiar) => {
    elementoALimpiar.innerHTML = "";
}

// nueva función para los seleccionados
// En teoría esto no funciona, porque al estar definido el musico con un spread, no puedo pasarle uno a uno los instrumentos...., pero lo voy a intentar. SI no lo consigo, sustituiré los cuatro ficheros por los del profe

document.querySelector("#orquesta").addEventListener("click", function () {
    // Por como esta definido en el html el select, que ya me da los sonidos, no necesito los instrumentos
    // let tambor = new Instrumento("pom, pom, pom")
    // let trompeta = new Instrumento("tu, tu, tun")
    // let guitarra = new Instrumento("tlan,tlan, tlan")
    let orquesta = new Musico("orquesta", instrumentos)
    let instrumentos = new Array()
    let cargarInstrumentos = () => {
        let selectInstrumentos = document.querySelector("#instrumentos")
        for (let i = 0; i < selectInstrumentos.selectedOptions.length; i++) {
            let instrumento = new Instrumento(selectInstrumentos.selectedOptions[i].value)
            instrumentos.push(instrumento)
        }
    }
// Antes poniamos un "orquesta.tocar()", pero esto ya no tiene sentido porque al crear el instrumento lo tengo definido por su sonido, directamente..., que era lo que deciamos en el constructor del instrumento """constructor(sonido)"""
// Hay que ver como sacamos por pantalla y por console log lo que queremos


})