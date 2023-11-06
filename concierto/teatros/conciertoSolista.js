import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

let tambor = new Instrumento("pom, pom, pom")
let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
//let instrumentos = new Array()
//let instrumentos=[tambor] //instrumentos.push(tambor)
//instrumentos.push(trompeta)
//let solista = new Musico( "percusion",instrumentos)
let solista = new Musico("percusión", tambor)
let hombreOrquesta = new Musico("polivalente", tambor, trompeta)

//function limpiaElemento (elementoAlimpiar){
let limpiaElemento = elementoAlimpiar => {
    elementoAlimpiar.innerHTML="";
}

// let conciertoSolista = () => {
//     switch (solista.instrumentos.length) {
//         case 1:
//             solista.tocar()
//             break;
//         case 0:
//             console.log("no tienes nada que tocar")
//             break;
//         default:
//             console.log("tu no eres un hombre orquesta")
//     }
// }

//los textos estáticos mejor declarados dentro de una CONSTANTE
const MENSAJE_NO_INSTRUMENTO="no tienes nada que tocar"
const MENSAJE_NO_SOLISTA="tú no eres un solista"
const MENSAJE_NO_HOMBRE_ORQUESTA="tú no eres un hombre orquesta"

let contenido1 = document.querySelector("#contenido1")
//document.querySelector("#botonSolista").addEventListener("click",conciertoSolista())
//let botonSolista=document.querySelector("#botonSolista")
//botonSolista.addEventListener("click", () => {
document.querySelector("#botonSolista").addEventListener("click", () => {

    limpiaElemento(contenido1);
    let h1Tipo = document.createElement("h1");
    switch (solista.instrumentos.length) {
        case 1:
            //solista.tocar()
            h1Tipo.innerHTML = `Eres un músico de tipo ${solista.tipo}`;
            contenido1.appendChild(h1Tipo);

            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `Tu sonido es "${solista.instrumentos[0].sonar()}"`;
            contenido1.appendChild(h1Sonido);
            break;
        case 0:
            h1Tipo.innerHTML = MENSAJE_NO_INSTRUMENTO;
            contenido1.appendChild(h1Tipo);
            break;
        default:
            limpiaElemento(h1Tipo);
            h1Tipo.innerHTML = MENSAJE_NO_HOMBRE_ORQUESTA;
            contenido1.appendChild(h1Tipo);
    }
})



let conciertoHombreOrquesta = () => {
    limpiaElemento(contenido1);
    let h1Tipo = document.createElement("h1");
    //limpiaElemento(h1Tipo); redundante xq al limpiar contenido1 esto ya lo limpia
    switch (hombreOrquesta.instrumentos.length) {
        case 1:        
            h1Tipo.innerHTML = MENSAJE_NO_SOLISTA;
            contenido1.appendChild(h1Tipo);
            break;
        case 0:      
            h1Tipo.innerHTML = MENSAJE_NO_INSTRUMENTO;
            contenido1.appendChild(h1Tipo);
            break;
        default:       
            h1Tipo.innerHTML = `Eres un músico de tipo ${hombreOrquesta.tipo}`;
            contenido1.appendChild(h1Tipo);

            hombreOrquesta.instrumentos.forEach(instrumento => {
                let h1Sonido = document.createElement("h1");
                h1Sonido.innerHTML = `Tu sonido es "${instrumento.sonido}"`;
                contenido1.appendChild(h1Sonido);
            })
    }
}

document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
    conciertoHombreOrquesta()
})


