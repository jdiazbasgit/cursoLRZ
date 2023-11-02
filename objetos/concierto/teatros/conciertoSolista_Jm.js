import { Instrumento } from "../clases/Instrumento_Jm.js";
import { Musico } from "../clases/Musico_Jm.js";



document.querySelector("#boton").addEventListener("click",function(){
    let tambor=new Instrumento("pom, pom, pom")
    let instrumentos=new Array()
    //let instrumentos=[tambor]
    //instrumentos.push(tambor)
    instrumentos[0]=tambor
    let solista=new Musico(instrumentos,"percusion")
    solista.tocar()
})

document.querySelector("#hombreOrquesta").addEventListener("click",function(){
    let tambor=new Instrumento("pom,pom,pom")
    let trompeta=new Instrumento("tuuu, tuuuu, tuuuu")
    let guitarra=new Instrumento("tlan, tlan, tlan")
    let hombreOrquesta=new Musico([tambor,trompeta,guitarra],"varios")
    hombreOrquesta.tocar()
})