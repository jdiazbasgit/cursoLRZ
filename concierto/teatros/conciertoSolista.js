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
//let hombreOrquesta = new Musico("polivalente", tambor, trompeta)
//hombreOrquesta.tocar()

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

let hombreOrquesta = new Musico("polivalente", tambor, trompeta)

let conciertoHombreOrquesta = () => {
    switch (hombreOrquesta.instrumentos.length) {
        case 1:
            console.log("tu no eres un solista")
            break;
        case 0:
            console.log("no tienes nada que tocar")
            break;
        default:           
            let contenido1 = document.querySelector("#contenido1")
            let h1Tipo = document.createElement("h1");
            h1Tipo.innerHTML = `Eres un músico de tipo "${hombreOrquesta.tipo}"`;
            contenido1.appendChild(h1Tipo);

            let contenido2 = document.querySelector("#contenido2")
            let instrumentosOrquesta = new Array;
            hombreOrquesta.instrumentos.forEach(instrumento => {
                instrumentosOrquesta.push(instrumento);
                //console.log(instrumento);

                let h1Sonido = document.createElement("h1");
                h1Sonido.innerHTML = `Tu sonido es "${instrumento.sonido}"`;
                contenido2.appendChild(h1Sonido);
            })
    }
}

document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
    conciertoHombreOrquesta()
})


