import { Instrumento } from "../clases/Instrumento_Jm.js";
import { Musico } from "../clases/Musico_Jm.js";



document.querySelector("#boton").addEventListener("click", function () {
    //let tambor = new Instrumento("pom, pom, pom")
   // let instrumentos = new Array()
    //instrumentos[0] = tambor
   // let solista = new Musico("percusion", instrumentos)
   // solista.tocar()

    //tambien se puede hacer de la siguiente manera
    let tambor=new Instrumento("pom, pom, pom")
    let solista=new Musico("percusion", tambor)
    solista.tocar()
})

document.querySelector("#hombreOrquesta").addEventListener("click", function () {
    let tambor = new Instrumento("pom,pom,pom")
    let trompeta = new Instrumento("tuuu, tuuuu, tuuuu")
    let guitarra = new Instrumento("tlan, tlan, tlan")
    let hombreOrquesta = new Musico("varios", tambor, trompeta, guitarra)
    hombreOrquesta.tocar()
})