import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

let tambor = new Instrumento("pom, pom, pom")
let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
//let instrumentos = new Array()
//let instrumentos=[tambor]
//instrumentos.push(tambor)
//instrumentos.push(trompeta)
//instrumentos[0] = tambor
//let solista = new Musico( "percusion",instrumentos)
let solista = new Musico("percusion", tambor)
let hombreOrquesta = new Musico("polivalente", tambor, trompeta)
//hombreOrquesta.tocar()

let limpiaElemento = (elementoAlimpiar) => {
    elementoAlimpiar.innerHTML="";
}

let contenido1 = document.querySelector(#contenido1)
document.querySelector("#botonSolista").addEventListener("click", () => {
let conciertoSolista = () => {

    limpiaElemento(contenido1)
    switch (solista.instrumentos.length) {
        case 1:
            // solista.tocar()
            limpiaElemento(h1Tipo)
            h1Tipo.innerHTML=`eres un musico de tipo "${solista.tipo}"`
            contenido1.appendChild(h1Tipo)

            limpiaElemento(h1Tipo)
            let h1sonar=document.createElement
            break;
        case 0:
            console.log("no tienes nada que tocar")
            break;
        default:
            console.log("tu no eres un hombre orquesta")
    }

})

let conciertoHombreOrquesta = () => {
    limpiaElemento(contenido1)
   
    // limpiaElemento(h1Tipo)
    switch (hombreOrquesta.instrumentos.length) {
        case 1:
            h1Tipo.innerHTML=MENSAJE_NO_SOLISTA
            contenidio1.appendChild(h1Tipo)
            // console.log("tu no eres un solista")
            break;
        case 0:
            h1Tipo.innerHTML= MENSAJE_NO_INSTRUMENTO
            // console.log("no tienes nada que tocar")
            break;
        default:
            h1Tipo.innerHTML= `eres un musico tipo ${hombreOrquesta.tipo}`
            contenido1.appendChild(h1Tipo)

            hombreOrquesta.instrumentos.forEach(instrumento => {
                
                var h1Nuevo = document.createElement("h1")
                h1Nuevo.innerHTML = `el sonido es: ${instrumento.sonido}`
                divContenedor.appendChild(h1Nuevo)
        
            })
    }
}

//document.querySelector("#botonSolista").addEventListener("click",conciertoSolista())

document.querySelector("#botonSolista").addEventListener("click", () => {

    switch (solista.instrumentos.length) {
        case 1:
            solista.tocar()
            break;
        case 0:
            console.log("no tienes nada que tocar")
            break;
        default:
            console.log("tu no eres un hombre orquesta")
    }

})

document.querySelector("#botonHombreOrquesta").addEventListener("click", () =>{
     conciertoHombreOrquesta() 
    })


