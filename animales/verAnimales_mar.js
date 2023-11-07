import { Animal } from "./clases/Animal_mar.js"


//No hace falta ponerle nombre a la función (FUNCIÓN ANÓNIMA) ya que no se va a utilizar de nuevo

//document.querySelector("#boton").addEventListener("click",()=>{
document.querySelector("#boton").addEventListener("click", function () {
    let perro = new Animal("canina", "caniche"); //MAYUSCULA la 1ª porque llamas al constructor
    let divContenido = document.querySelector("#contenido");
    let pRaza = document.createElement("p");
    let pEspecie = document.createElement("p");
    pRaza.innerHTML = `la raza es ${perro.raza}`;
    pEspecie.innerHTML = `la especie es ${perro.especie}`;
    divContenido.appendChild(pRaza);
    divContenido.appendChild(pEspecie);
})