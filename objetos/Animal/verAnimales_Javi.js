import { Animal } from "./clases/Animal_Javi" // Ruta del archivo donde se crea la clase y sus propiedades

document.querySelector("#boton").addEventListener("click", function () {
    let perro = new Animal("caniche", "canina")
    let div = document.querySelector("#contenido")
    let h1Raza = document.createElement("h1")
    let h1Especie = document.createElement("h1")
    h1Raza.innerHTML = `La raza es ${perro.raza}`
    h1Especie.innerHTML = `La especie es ${perro.especie}`
    div.appendChild(h1Raza)
    div.appendChild(h1Especie)
})
