import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

// let tambor = new Instrumento("pom, pom, pom")
// let trompeta = new Instrumento("tuuu, tuuuu, tuuuu");
// let guitarra = new Instrumento("tlan, tlan, tlan");
// let instrumentos = new Array()
// instrumentos[0] = tambor
// instrumentos[1] = trompeta
// instrumentos[2] = guitarra
// let solista = new Musico(tambor)
// let hombreOrquesta = new Musico([tambor, trompeta, guitarra]);


document.querySelector("#boton").addEventListener("click", function () {
    let tambor = new Instrumento("pom, pom, pom")
    let instrumentos = new Array()
    instrumentos[0] = tambor
    let solista = new Musico(instrumentos)
    // solista.tocar()
    let divContenido = document.querySelector("#contenido");
    let h1instrumento = document.createElement("h1");
    h1instrumento.innerHTML = `El músico toca ${solista.tocar()}`;
    divContenido.appendChild(h1instrumento);
})

document.querySelector("#hombreOrquesta").addEventListener("click", () => {
    let tambor = new Instrumento("pom, pom, pom");
    let trompeta = new Instrumento("tuuu, tuuuu, tuuuu");
    let guitarra = new Instrumento("tlan, tlan, tlan");
    let hombreOrquesta = new Musico([tambor, trompeta, guitarra]);
    let divContenido = document.querySelector("#contenido");
    let h1instrumento = document.createElement("h1");
    h1instrumento.innerHTML = `El músico toca ${hombreOrquesta.tocar().join(' | ')}`;
    divContenido.appendChild(h1instrumento);
})

document.querySelector("#botonOrquesta").addEventListener("click", () => {

})


// Ejemplo mio 

// document.querySelector("#boton").addEventListener("click", function () {
//     let tambor = new Instrumento("pom pom pom")
//     let solista = new Musico([tambor])
//     solista.tocar()
// })

// document.querySelector("#hombreOrquesta").addEventListener("click", function () {
//     let tambor = new Instrumento("pom pom pom")
//     let guitarra = new Instrumento("tra tra tra")
//     let trompeta = new Instrumento("tu tu tu")
//     let hombreOrquesta = new Musico([tambor, guitarra, trompeta])
//     hombreOrquesta.tocar()
// })


document.querySelector("#botonConcierto").addEventListener("click", function () {

    // document.querySelector("#instrumento").addEventListener("change", function () {
    // OPción de GPT
    let selectedOptions = document.querySelector("#instrumento").selectedOptions;
    let instrumentos = Array.from(selectedOptions).map(option => new Instrumento(option.value));
    let hombreOrquesta = new Musico(instrumentos)
    // hombreOrquesta.tocar();
    let divContenido = document.querySelector("#contenido")
    let h1instrumento = document.createElement("h1")
    h1instrumento.innerHTML = `El músico toca ${hombreOrquesta.tocar().join(' | ')}`
    divContenido.appendChild(h1instrumento)


    // Opción mía
    // let instrumentoMusico = new Instrumento(document.querySelector("#instrumento").value)
    // let hombreOrquesta = new Musico([instrumentoMusico])
    // hombreOrquesta.tocar()
    // let divContenido = document.querySelector("#contenido")
    // let h1instrumento = document.createElement("h1")
    // h1instrumento.innerHTML = `El músico toca ${hombreOrquesta.tocar()}` 
    // divContenido.appendChild(h1instrumento)
})