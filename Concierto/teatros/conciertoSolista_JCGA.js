import { Instrumento } from "../intrumento.js";
import { Musico} from "../musico.js";



document.querySelector("boton").addEventListener("click", function () {
    let tambor = new Instrumento("pom, pom, pom")
    let solista = new Musico([tambor])
    solista.tocar()
})

document.querySelector("#hombreOrquesta").addEventListener("click",function(){
    let tambor=new Instrumento("pom, pom, pom")
    let trompeta=new Instrumento("ran, ran, ran")
    let guitarra=new Instrumento("tlan,tlan, tlan")
})