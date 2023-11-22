import { HombreOrquesta } from "../ClaseConcierto/HombreOrquetaMn.js";
import { Instrumento } from "../ClaseConcierto/InstrumentoMn.js";
import { Solista } from "../ClaseConcierto/SolistaMn.js";
import { Tambor } from "../ClaseConcierto/TamborMn.js";
import { Trompeta } from "../ClaseConcierto/TrompetaMn.js";

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