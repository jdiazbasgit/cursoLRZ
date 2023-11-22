import { Animal } from "./clases/Animal.js"



//document.querySelector("#boton").addEventListener("click",()=>{
    document.querySelector("#boton").addEventListener("click",function(){// crea el evento en el modulo para que se ejecute en el html
    let perro=new Animal("canina","caniche")
    // let gato = new Animal ("felina","angora") // construye otro objeto
    let div= document.querySelector("#contenido")
     let h1raza=document.createElement("h1")
     let h1Especie=document.createElement("h1")
     h1raza.innerHTML=`la raza es ${perro.raza}`
     h1Especie.innerHTML=`la especie es ${perro.especie}`
     div.appendChild(h1raza)
     div.appendChild(h1Especie)
})
    


