import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

let tambor = new Instrumento("pom, pom, pom")
let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
//let instrumentos = new Array()
//let instrumentos=[tambor] //instrumentos.push(tambor)
//instrumentos.push(trompeta)
//let solista = new Musico( "percusion",instrumentos)
let solista = new Musico("percusión", tambor)

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

let contenido1 = document.querySelector("#contenido1")
//document.querySelector("#botonSolista").addEventListener("click",conciertoSolista())
document.querySelector("#botonSolista").addEventListener("click", () => {
    
    limpiaElemento(contenido1);
    switch (solista.instrumentos.length) {
        case 1:
            //solista.tocar()
            
            let h1Tipo = document.createElement("h1");
            h1Tipo.innerHTML = `Eres un músico de tipo "${solista.tipo}"`;
            contenido1.appendChild(h1Tipo);

            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `Tu sonido es "${solista.instrumentos[0].sonar()}"`;
            contenido1.appendChild(h1Sonido);
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
    limpiaElemento(contenido1);
    switch (hombreOrquesta.instrumentos.length) {
        case 1:
            console.log("tu no eres un solista")
            break;
        case 0:
            console.log("no tienes nada que tocar")
            break;
        default:         
            let h1Tipo = document.createElement("h1");
            h1Tipo.innerHTML = `Eres un músico de tipo "${hombreOrquesta.tipo}"`;
            contenido1.appendChild(h1Tipo);

            hombreOrquesta.instrumentos.forEach(instrumento => {
                console.log(instrumento);
                let h1Sonido = document.createElement("h1");
                h1Sonido.innerHTML = `Tu sonido es "${instrumento.sonido}"`;
                contenido1.appendChild(h1Sonido);
            })
    }
}

document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
    conciertoHombreOrquesta()
})


