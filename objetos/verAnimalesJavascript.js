import { Animal } from "./clases/Animal.js"


//document.querySelector("#boton").addEventListener("click",()=>{
    document.querySelector("#boton").addEventListener("click",function(){
    let gato= new Animal("felina","gato de angora")
    let divContenido= document.querySelector("#contenido")
     let h1raza=document.createElement("h1")
     let h1Especie=document.createElement("h1")
     h1raza.innerHTML=`la raza es ${gato.raza}`
     h1Especie.innerHTML=`la espece es ${gato.especie}`
     divContenido.appendChild(h1raza)
     divContenido.appendChild(h1Especie)
})
    
   


