import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

// Aquí empieza el código para el ejercicio con el Select

var instrumentos = new Array()
let solista
let hombreOrquesta
let cargarInstrumentos = () => {
    instrumentos = []
    let selectInstrumentos = document.querySelector("#selectInstrumentos")
    for (let i = 0; i < selectInstrumentos.selectedOptions.length; i++) {
        let instrumento = new Instrumento(selectInstrumentos.selectedOptions[i].value)
        instrumentos.push(instrumento)
    }
    solista = new Musico("percusión", instrumentos)
    hombreOrquesta = new Musico("polivalente", instrumentos)
}

let limpiaElemento = elementoAlimpiar => {
    elementoAlimpiar.innerHTML = "";
}


const MENSAJE_NO_INSTRUMENTO = "no tienes nada que tocar"
const MENSAJE_NO_SOLISTA = "tú no eres un solista"
const MENSAJE_NO_HOMBRE_ORQUESTA = "tú no eres un hombre orquesta"

let contenido1 = document.querySelector("#contenido1")

let h1Tipo = document.createElement("h1");
document.querySelector("#botonSolista").addEventListener("click", () => {

    cargarInstrumentos()
    limpiaElemento(contenido1);

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
    cargarInstrumentos()
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

// // Aquí empieza el código para el ejercicio con los botones (ejercicio inicial

// let tambor = new Instrumento("pom, pom, pom")
// let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
// // let solista = new Musico("percusion", tambor)
// // let hombreOrquesta = new Musico("polivalente", tambor, trompeta)
// const MENSAJE_NADA_TOCAR = "No tienes nada que tocar"
// const MENSAJE_NO_SOLISTA = "Tú no eres un solista"
// const MENSAJE_NO_ORQUESTA = "Tú no eres un hombre orquesta"

// let limpiar = elementoALimpiar => {
//     elementoALimpiar.innerHTML = " "
// }

// document.querySelector("#botonSolista").addEventListener("click", () => {
//     limpiar(contenido);
//     switch (solista.instrumentos.length) {
//         case 1:
//             solista.tocar()
//             solista.instrumentos.forEach((instrumento) => {
//                 let divContenido = document.querySelector("#contenido");
//                 let h1instrumento = document.createElement("h1");
//                 h1instrumento.innerHTML = `El músico solista toca ${instrumento.sonar()}`;
//                 divContenido.appendChild(h1instrumento);
//             })
//             break;
//         case 0:
//             console.log(MENSAJE_NADA_TOCAR)
//             break;
//         default:
//             console.log(MENSAJE_NO_ORQUESTA)
//     }
// })

// let conciertoHombreOrquesta = () => {
    
//     limpiar(contenido);
//     switch (hombreOrquesta.instrumentos.length) {
//         case 1:
//             console.log(MENSAJE_NO_SOLISTA)
//             break;
//         case 0:
//             console.log(MENSAJE_NADA_TOCAR)
//             break;
//         default:
//             hombreOrquesta.tocar()
//             hombreOrquesta.instrumentos.forEach((instrumento) => {
//                 let divContenido = document.querySelector("#contenido");
//                 let h1instrumento = document.createElement("h1");
//                 h1instrumento.innerHTML = `El músico orquesta toca ${instrumento.sonar()}`;
//                 divContenido.appendChild(h1instrumento);
//             })
//     }
// }


// document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
//     conciertoHombreOrquesta()
// })



// document.querySelector("#botonConciertoSolista").addEventListener("click", () => {
//     cargarInstrumentos()
// })



