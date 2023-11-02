import { Instrumento } from "./pooinstrumento.js";
import { Musico } from "./poomusico.js";

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

let conciertoSolista = () => {

    switch (solista.instrumentos.length) {
        case 1:
            solista.tocar()
            var divContenedor = document.querySelector("#espectador")
            var h1Nuevo = document.createElement("h1")
            h1Nuevo.innerHTML = Instrumento.array.forEach(element => {
            });
            divContenedor.appendChild(h1Nuevo)
            break;
        case 0:
            console.log("no tienes nada que tocar")
            break;
        default:
            console.log("tu no eres un hombre orquesta")
    }

}

let conciertoHombreOrquesta = () => {
    switch (hombreOrquesta.instrumentos.length) {
        case 1:
            console.log("tu no eres un solista")
            var divContenedor = document.querySelector("#espectador")
            var h1Nuevo = document.createElement("h1")
            h1Nuevo.innerHTML = Instrumento.array.forEach(element => {
            });
            divContenedor.appendChild(h1Nuevo)
            break;
        case 0:
            console.log("no tienes nada que tocar")
            break;
        default:
            hombreOrquesta.tocar()
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

document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
    conciertoHombreOrquesta()
})


