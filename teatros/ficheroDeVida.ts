import { HombreOrquesta } from "../clases/HombreOrquesta.js";
import { Instrumento } from "../clases/Instrumento.js";
import { Solista } from "../clases/Solista.js";
import { Tambor } from "../clases/Tambor.js";
import { Trompeta } from "../clases/Trompeta.js";
import { InstrumentoInterface } from "../interfaces/InstrumentoInterface.js";

var tambor:InstrumentoInterface= new Tambor("pom, pom, pom","tambor")
var trompeta:InstrumentoInterface= new Trompeta("tuuu, tuuu, tuuu","trompeta")
var instrumentosSolista:Array<InstrumentoInterface>=[tambor]
var instrumentosHombreOrquesta:Array<InstrumentoInterface>=[tambor,trompeta]
var solista:Solista= new Solista(instrumentosSolista,"percusion")
var hombreOrquesta:HombreOrquesta= new HombreOrquesta(instrumentosHombreOrquesta,"polivalente")
console.log("va a tocar el solista")
solista.tocar();
console.log("va a tocar el hombre orquesta")
hombreOrquesta.tocar()
//trompeta.dondeEstoy()
