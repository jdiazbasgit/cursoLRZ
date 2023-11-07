import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

let solista;
let hombreOrquesta;

const MENSAJE_NO_INSTRUMENTO="No tienes nada que tocar"
const MENSAJE_NO_SOLISTA="Tú no eres un solista"
const MENSAJE_NO_HOMBRE_ORQUESTA="Tú no eres un hombre orquesta"

let limpiaElemento = elementoAlimpiar => {
    elementoAlimpiar.innerHTML="";
}

// POR DEPURAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let cargarInstrumentos = () =>{   
    let instrumentos = new Array();
    let selectInstrumentos = document.querySelector("#selectinstrumentos");

    for (let i = 0; i < selectInstrumentos.selectedOptions.length; i++) { 
        let instrumento = new Instrumento (selectInstrumentos.selectedOptions[i].value);//mete p.ej. tlan tlan tlan
        instrumentos.push(instrumento)  
        
       
       // let tipo= selectInstrumentos.selectedOptions[i].value.split(-)
    }
    //hacer un split del value para meterlo en tipo o instrumentos

    solista = new Musico("solista", instrumentos)
    hombreOrquesta = new Musico("polivalente", instrumentos)
}

let contenido1 = document.querySelector("#contenido1")
let h1Tipo = document.createElement("h1");


document.querySelector("#botonSolista").addEventListener("click", () => {  
    limpiaElemento(contenido1);  
    cargarInstrumentos(); 

    switch (solista.instrumentos.length) {
        case 1:          
            h1Tipo.innerHTML = `Eres un músico de tipo ${solista.tipo}`;
            contenido1.appendChild(h1Tipo);
            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `El sonido del instrumento seleccionado es: ${solista.instrumentos[0].sonar()}`;
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
    cargarInstrumentos ();

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