import { HombreOrquesta } from "../clases/HombreOrquesta_dmr.js";
import { Instrumento } from "../clases/Instrumento_dmr.js";
import { Solista } from "../clases/Solista_dmr.js";
import { Tambor } from "../clases/Tambor_dmr.js";
import { Trompeta } from "../clases/Trompeta_dmr.js";

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
