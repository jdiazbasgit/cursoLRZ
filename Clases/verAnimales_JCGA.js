import { Animal } from "./Animal_JCGA.js"

document.querySelector("#boton").addEventListener("click",() =>{
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
verAnimales()

