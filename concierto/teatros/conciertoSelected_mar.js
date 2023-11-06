//import { Instrumento } from "../clases/InstrumentoMar.js";
import { Musico } from "../clases/MusicoMar.js";

// let tambor = new Instrumento("pom, pom, pom")
// let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
let solista = new Musico("percusión", tambor)
let hombreOrquesta = new Musico("polivalente", tambor, trompeta)

const MENSAJE_NO_INSTRUMENTO="no tienes nada que tocar"
const MENSAJE_NO_SOLISTA="tú no eres un solista"
const MENSAJE_NO_HOMBRE_ORQUESTA="tú no eres un hombre orquesta"

let contenido1 = document.querySelector("#contenido1")

let limpiaElemento = elementoAlimpiar => {
    elementoAlimpiar.innerHTML="";
}

// POR DEPURAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let cargarInstrumentos = () =>{
    let selectInstrumentos = document.querySelector("#selectinstrumentos");
    let sonidoInstrumentos = new Array();

    for (let i = 0; i < selectInstrumentos.options.length; i++) {

        if (selectInstrumentos.options[i].selected) {
            //console.log(selectInstrumentos.options[i].value);//punto de control
            sonidoInstrumentos[i] = selectInstrumentos.options[i].value;
            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `El sonido del instrumento seleccionado es: ${sonidoInstrumentos[i]}`;
            contenido1.appendChild(h1Sonido);

            let h1Tipo = document.createElement("h1");
            switch (sonidoInstrumentos.length) {
                case 1:
                    
                    h1Tipo.innerHTML = `Eres un músico de tipo ${solista.tipo}`;
                    contenido1.appendChild(h1Tipo);
        
                    let h1Sonido = document.createElement("h1");
                    h1Sonido.innerHTML = `Tu sonido es "${solista.sonidoInstrumentos[0].sonar()}"`;
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
           
        }
    }


}



document.querySelector("#botonSolista").addEventListener("click", () => {
    limpiaElemento(contenido1);
    cargarInstrumentos ();  
})



let conciertoHombreOrquesta = () => {
    limpiaElemento(contenido1);
    cargarInstrumentos ();
    let h1Tipo = document.createElement("h1");

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