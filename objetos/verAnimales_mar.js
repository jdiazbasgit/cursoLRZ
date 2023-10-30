import { Animal } from "./clases/Animal_mar.js"


//No hace falta ponerle nombre a la función (FUNCIÓN ANÓNIMA) ya que no se va a utilizar de nuevo
//document.querySelector("#boton").addEventListener("click",()=>{
document.querySelector("#boton").addEventListener("click", function () {
    let perro = new Animal("canina", "caniche"); //MAYUSCULA la 1ª porque llamas al constructor
    let div = document.querySelector("#contenido");
    let h1raza = document.createElement("h1");
    let h1Especie = document.createElement("h1");
    h1raza.innerHTML = `la raza es ${perro.raza}`;
    h1Especie.innerHTML = `la espece es ${perro.especie}`;
    div.appendChild(h1raza);
    div.appendChild(h1Especie);
})