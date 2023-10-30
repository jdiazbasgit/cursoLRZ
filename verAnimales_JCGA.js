import { Animal } from "./Clases/Animal_JCGA.js"

document.querySelector("#boton").addEventListener("click",() =>{
    // el addEventListener crea un "onclick" y le digo que lo asocie al id=boton. No le pongo nombre a la funcion porque no lo voy a volver a usar en el futuro
    // vamos a construir un animal
    let perro=new Animal("canina","caniche")
    // invoco el constructor de la clase Animal
    let divContenido=document.querySelector("#contenido")
    // Creo una variable que le llamo "divContenido" porque la voy a llamar varias veces, así que necesito ponerle nombre
    let h1raza=document.createElement("h1")
    let h1Especie=document.createElement("h1")
    h1raza.innerHTML=`la raza es ${perro.raza}`
    h1Especie.innerHTML=`la Especie es ${perro.especie}`
    divContenido.appendChild(h1raza)
    // crea un hijo del divContenido
    divContenido.appendChild(h1Especie)
})


/** 
*Este es el formato de comentarios tecnicos. Sonar no los penaliza
*Cada comentario en una linea y todo se mantiene dentro de comentario tecnico
**/  


    