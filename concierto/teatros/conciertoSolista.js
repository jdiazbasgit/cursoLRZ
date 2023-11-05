import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

let tambor = new Instrumento("pom, pom, pom")
let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
//let instrumentos = new Array()
//let instrumentos=[tambor] //instrumentos.push(tambor)
//instrumentos.push(trompeta)
//let solista = new Musico( "percusion",instrumentos)
let solista = new Musico("percusión", tambor)


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
            //solista.tocar()
            let contenido1 = document.querySelector("#contenido1")
            let h1Tipo = document.createElement("h1");
            h1Tipo.innerHTML = `Eres un músico de tipo "${solista.tipo}"`;
            contenido1.appendChild(h1Tipo);

            let h1Sonido = document.createElement("h1");

            solista.instrumentos.forEach(instrumento => {
                h1Sonido.innerHTML = `Tu sonido es "${instrumento.sonido}"`;
                contenido1.appendChild(h1Sonido);
            })

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
            let contenido2 = document.querySelector("#contenido2")
            let h1Tipo = document.createElement("h1");
            h1Tipo.innerHTML = `Eres un músico de tipo "${hombreOrquesta.tipo}"`;
            contenido2.appendChild(h1Tipo);

            hombreOrquesta.instrumentos.forEach(instrumento => {
                console.log(instrumento);
                let h1Sonido = document.createElement("h1");
                h1Sonido.innerHTML = `Tu sonido es "${instrumento.sonido}"`;
                contenido2.appendChild(h1Sonido);
            })
    }
}

document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
    conciertoHombreOrquesta()
})


