import { Animal } from "./clases/Animal_nsr.js";

document.querySelector("#boton").addEventListener("click", function () {
  let perro = new Animal("canina", "caniche");
  let divContenido = document.querySelector("#contenido");
  let h1Raza = document.createElement("h1");
  let h1Especie = document.createElement("h1");
  h1Raza.innerHTML = `La raza es: ${perro.raza}`;
  h1Especie.innerHTML = `La especie es: ${perro.especie}`;
  divContenido.appendChild(h1Raza);
  divContenido.appendChild(h1Especie);
});
