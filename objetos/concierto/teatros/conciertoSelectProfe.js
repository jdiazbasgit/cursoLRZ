import { Instrumento } from "../clases/InstrumentoSelect.js";
import { Musico } from "../clases/MusicoSelect.js";

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
    solista = new Musico(selectInstrumentos.selectedOptions[0].getAttribute("tipo"), instrumentos)
    hombreOrquesta = new Musico("polivalente", instrumentos)
}


//function limpiaElemento (elementoAlimpiar){
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