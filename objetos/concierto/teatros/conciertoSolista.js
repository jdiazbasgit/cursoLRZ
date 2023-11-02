import { Instrumento } from "../clases/Instrumento.js";
import { Musico } from "../clases/Musico.js";

let tambor = new Instrumento("pom, pom, pom")
let instrumentos = new Array()
//let instrumentos=[tambor]
instrumentos.push(tambor)
//instrumentos[0] = tambor
let solista = new Musico( "percusion",instrumentos)
solista.tocar()

