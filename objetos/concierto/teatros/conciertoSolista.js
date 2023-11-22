import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

// // document.querySelector("#boton").addEventListener("click",function(){
// // let selectInstrumentos=document.querySelector("#instrumentos")
// // console.log(selectInstrumentos.options)

// let tambor = new Instrumento("pom, pom, pom") //invoca al constructor siempre con new
// let trompeta = new Instrumento("tuu,tuu,tuu")

// // let instrumentos=new Array()
// //let instrumentos=[tambor]
// // instrumentos.push(tambor)
// // instrumentos[0]=tambor
// //instrumentos.push(trompeta)
// //let solista=new Musico ("percusion",instrumentos) sin el spreed



// let solista = new Musico("percusion", tambor)// por el spread
// let hombreOrquesta = new Musico("polivalente", tambor, trompeta)
// // solista.tocar()
// hombreOrquesta.tocar()

// let limpiaElemento = (elementoAalimpiar) => {
//     elementoAalimpiar.innerHTML = ""
// }

// // Para mensajes estaticos se crean const
// const MENSAJE_NO_INSTRUMENTO = "No tienes nada que tocar"
// const MENSAJE_NO_SOLISTA = "Tu no eres un solista"
// const MENSAJE_NO_HOMBRE_ORQUESTA =   "Tu no eres un hombre orquesta"
// // let conciertoSolista = () => {
// let contenido1 = document.querySelector(#contenido1)
// document.querySelector("#botonSolista").addEventListener("click", () => {
//     limpiaElemento(contenido1)


//     switch (solista.instrumentos.length) {
//         case 1:

//             let h1Tipo = document.createElement("h1");
//             h1Tipo.innerHTML = `Eres un musico de tipo "${solista.tipo}"`;
//             contenido1.appendchild(h1Tipo);


//             let h1Sonido = document.createElement("h1")
//             h1Sonido.innerHTML = `Tu sonido es "${solista.tipo}"`;
//             contenido1.appendchild(h1Sonido)
//             // solista.tocar()
//             break;

//         case 0:

//             h1Tipo.innerHTML= MENSAJE_NO_INSTRUMENTO
//             contenido1.appendchild(h1Tipo)
//             break;

//         default:
//             h1Tipo.innerHTML= MENSAJE_NO_SOLISTA
//             contenido1.appendchild(h1Tipo)
// }
// })


// // let conciertoSolista=()=>{
// // //     // if(solista.instrumentos.length ===1){
// // //     // console.log("va a tocar el solista")
// // //     // console.log(solista.tocar())
// // //     // }

// // switch(solista.instrumentos.length){ // porque hay 3 opciones no else if
// //     case 1:
// //         solista.tocar()
// //         instrumentos.forEach(instrumento=> {
// //         });
// //         break;
// //     case 0:
// //         console.log("no tienes nada que tocar")
// //         break;
// //     default:
// //         console.log("tu no eres un hombre orquesta")
// // }
// //            }

// // })

// // document.querySelector("#botonSolista").addEventListener("click",()=>{
// //recibe dos parametros: el tipo de evento(click..) y la funcion anonima que se va a ejecutar
// // })

// let conciertoHombreOrquesta = () => {

//     switch (hombreOrquesta.instrumentos.length) { // porque hay 3 opciones no else if
//         case 1:
//             console.log("tu no eres un solista")
//             break;
//         case 0:
//             console.log("no tienes nada que tocar")
//             break;

//         default:
//             hombreOrquesta.tocar()
//     }
// }
// document.querySelector("#botonHombreOrquesta").addEventListener("click", () => {
//     conciertoHombreOrquesta()
// })




// document.querySelector("#hombreOrquesta").addEventListener("click",function(){
//     let tambor=new Instrumento("pom,pom,pom")
//     let trompeta=new Instrumento("tuuu, tuuuu, tuuuu")
//     let guitarra=new Instrumento("tlan, tlan, tlan")
//     let hombreOrquesta=new Musico([tambor,trompeta,guitarra],"varios")
//     hombreOrquesta.tocar()
// import { Instrumento } from "../clases/Instrumento.js";
// import { Musico } from "../clases/Musico.js";
let tambor = new Instrumento("pom, pom, pom")
let trompeta = new Instrumento("tuuuu, tuuuu, tuuuu")
//let instrumentos = new Array()
//let instrumentos=[tambor] //instrumentos.push(tambor)
//instrumentos.push(trompeta)
//let solista = new Musico( "percusion",instrumentos)
var instrumentos = new Array()
let solista
let hombreOrquesta



//function limpiaElemento (elementoAlimpiar){
let limpiaElemento = elementoAlimpiar => {
    elementoAlimpiar.innerHTML = "";
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
const MENSAJE_NO_INSTRUMENTO = "no tienes nada que tocar"
const MENSAJE_NO_SOLISTA = "tú no eres un solista"
const MENSAJE_NO_HOMBRE_ORQUESTA = "tú no eres un hombre orquesta"

let contenido1 = document.querySelector("#contenido1")
//document.querySelector("#botonSolista").addEventListener("click",conciertoSolista())
//let botonSolista=document.querySelector("#botonSolista")
//botonSolista.addEventListener("click", () => {
let h1Tipo = document.createElement("h1");
document.querySelector("#botonSolista").addEventListener("click", () => {
    // cargarInstrumentos()
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
    // cargarInstrumentos()

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

