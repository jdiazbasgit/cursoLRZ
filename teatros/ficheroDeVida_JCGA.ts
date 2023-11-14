import { HombreOrquesta } from "../clases/HombreOrquesta_JCGA.js";
import { Instrumento } from "../clases/Instrumento_JCGA.js";
import { Solista } from "../clases/Solista_JCGA.js";
import { Tambor } from "../clases/Tambor_JCGA.js";
import { Trompeta } from "../clases/Trompeta_JCGA.js";

var tambor:Tambor= new Tambor("pom, pom, pom","tambor")
var trompeta:Trompeta= new Trompeta("tuuu, tuuu, tuuu","trompeta")
var instrumentosSolista:Array<Instrumento>=[tambor]
var instrumentosHombreOrquesta:Array<Instrumento>=[tambor,trompeta]
var solista:Solista= new Solista(instrumentosSolista,"percusion")
var hombreOrquesta:HombreOrquesta= new HombreOrquesta(instrumentosHombreOrquesta,"polivalente")
console.log("va a tocar el solista")
solista.tocar();
console.log("va a tocar el hombre orquesta")
hombreOrquesta.tocar()
trompeta.dondeEstoy()