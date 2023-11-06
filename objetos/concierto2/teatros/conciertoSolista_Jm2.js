import { Instrumento } from "../clases/Instrumento_Jm2.js";
import { Musico } from "../clases/Musico_Jm2.js";



document.querySelector("#boton").addEventListener("click", function () {
    let tambor = new Instrumento("pom, pom, pom")
    let instrumentos = new Array()
    //instrumentos[0] = tambor
    let solista = new Musico("percusion")
    let div = document.querySelector("#contenido")
    let h1solista = document.createElement("h1")
    h1solista.innerHTML = `El músico es de tipo "${solista.tipo}"`
    let h1solista2 = document.createElement("h1")
    h1solista2.innerHTML = `Con sonido "${tambor.sonido}"`
    div.appendChild(h1solista)
    div.appendChild(h1solista2)
    


    //tambien se puede hacer de la siguiente manera
    //let tambor=new Instrumento("pom, pom, pom")
    //let solista=new Musico("percusion", tambor)
    solista.tocar()
})

document.querySelector("#hombreOrquesta").addEventListener("click", function () {
    let tambor = new Instrumento("pom,pom,pom")
    let trompeta = new Instrumento("tuuu, tuuuu, tuuuu")
    let guitarra = new Instrumento("tlan, tlan, tlan")
    let hombreOrquesta = new Musico("varios", tambor, trompeta, guitarra)
    hombreOrquesta.tocar()
})