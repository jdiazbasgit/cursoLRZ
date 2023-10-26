import { Animal } from "./clases/Animal.js"



//document.querySelector("#boton").addEventListener("click",()=>{
    document.querySelector("#boton").addEventListener("click",function(){
    let perro=new Animal("canina","caniche")
    let div= document.querySelector("#contenido")
     let h1raza=document.createElement("h1")
     let h1Especie=document.createElement("h1")
     h1raza.innerHTML=`la raza es ${perro.raza}`
     h1Especie.innerHTML=`la espece es ${perro.especie}`
     div.appendChild(h1raza)
     div.appendChild(h1Especie)
})
    
   


