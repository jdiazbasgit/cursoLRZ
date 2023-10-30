document.querySelector("#boton").addEventListener("click",function(){
    let perro = new Animal ("caniche","canina")
    let div=document.querySelector("#contenido")
    let h1raza=document.createElement("h1")
    let h1especie=document.createElement("h1")
    h1Raza.innerHTML=`La raza es ${perro.raza}`
    h1Especie.innerHTML=`La especie es ${perro.especie}`
    div.appendChild(h1raza)
    div.appendChild(h1Especie)
})
