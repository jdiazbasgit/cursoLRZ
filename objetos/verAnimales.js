import { Animal } from "./Animal.js"

document.querySelector("#boton").addEventListener("click", function () {
    let perro = new Animal("canina", "caniche");
    let divContenido = document.querySelector("#contenido");
    let h1raza = document.createElement("h1");
    let h1Especie = document.createElement("h1");
    h1raza.innerHTML = `la raza es ${perro.raza}`
    h1Especie.innerHTML = `la raza es ${perro.especie}`
    divContenido.appendChild(h1raza);
    divContenido.appendChild(h1Especie);


})