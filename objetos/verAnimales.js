import { Animal } from "./clases/Animal.js"

/** Esta es la forma de poner correctamente los comentarios en Javascript */

document.querySelector("#boton").addEventListener("click", function () {
    let perro = new Animal("caniche", "canina")
    let divContenido = document.querySelector("#contenido")
    let h1raza = document.createElement("h1")
    let h1Especie = document.createElement("h1")
    h1raza.innerHTML = `la raza es ${perro.raza}`
    h1Especie.innerHTML = `la especie es ${perro.especie}`
    divContenido.appendChild(h1raza)
    divContenido.appendChild(h1Especie)
})