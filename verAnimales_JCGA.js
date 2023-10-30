import { Animal } from "./Clases/Animal_JCGA.js"

document.querySelector("#boton").addEventListener("click",() =>{
    // el addEventListener crea un "onclick" y le digo que lo asocie al id=boton. No le pongo nombre a la funcion porque no lo voy a volver a usar en el futuro
    // vamos a construir un animal
    let perro=new Animal("canina","caniche")
    let div=document.querySelector("#contenido")
    let h1raza=document.createElement("h1")
    let h1Especie=document.createElement("h1")
    h1raza.innerHTML=`la raza es ${perro.raza}`
    h1Especie.innerHTML=`la Especie es ${perro.especie}`
    div.appendChild(h1raza)
    div.appendChild(h1Especie)
})


/** 
*Este es el formato de comentarios tecnicos. Sonar no los penaliza
*Cada comentario en una linea y todo se mantiene dentro de comentario tecnico
**/  


    