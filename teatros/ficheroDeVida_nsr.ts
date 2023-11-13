import { HombreOrquesta } from "../clases/HombreOrquesta_nsr.js";
import { Instrumento } from "../clases/Instrumento_nsr.js";
import { Solista } from "../clases/Solista_nsr.js";
import { Tambor } from "../clases/Tambor_nsr.js";
import { Trompeta } from "../clases/Trompeta_nsr.js";

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
