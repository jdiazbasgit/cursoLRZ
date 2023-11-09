import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

//del documento html cogeme el id botonSolista, y el metodo addevenlistener es un clase de html elementent
//recibe dos parametros, el evento (click) y una funcion anonima, lo que sucede cuando haces click

document.querySelector("#botonSolista").addEventListener("click",function(){
    let tambor=new Instrumento("pom, pom, pom")
    // let instrumentos=new Array()
    // //let instrumentos=[tambor]
    // instrumentos.push(tambor)
    // // instrumentos[0]=tambor
    // let solista=new Musico("percusion", instrumentos)
    // //opcion mas optimizada
    let solista= new Musico("percusion", tambor)
    solista.tocar()

})

document.querySelector("#botonHombreOrquesta").addEventListener("click",function(){
    // let tambor=new Instrumento("pom,pom,pom")
    // let trompeta=new Instrumento("tuuu, tuuuu, tuuuu")
    // let guitarra=new Instrumento("tlan, tlan, tlan")
    // let hombreOrquesta=new Musico("varios", [tambor,trompeta,guitarra])
   let tambor=new Instrumento("pom, pom, pom")
   let Trompeta=new Instrumento("tuuuu, tuuu, tuuu")
   let hombreOrquesta=new Musico("polivalente", tambor, trompeta)
    hombreOrquesta.tocar()
})