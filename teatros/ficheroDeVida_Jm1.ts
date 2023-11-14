import { HombreOrquesta } from "../clases/HombreOrquesta_Jm1.js";
import { Instrumento } from "../clases/Instrumento_Jm1.js";
import { Solista } from "../clases/Solista_Jm1.js";
import { Tambor } from "../clases/Tambor_Jm1.js";
import { Trompeta } from "../clases/Trompeta_Jm1.js";
import { InstrumentoInterface } from "../interfaces/InstrumentoInterface_Jm1.js";

var tambor:Tambor= new Tambor("pom, pom, pom","tambor")
var trompeta:Trompeta= new Trompeta("tuuu, tuuu, tuuu","trompeta")
var instrumentosSolista:Array<InstrumentoInterface>=[tambor]
var instrumentosHombreOrquesta:Array<InstrumentoInterface>=[tambor,trompeta]
var solista:Solista= new Solista(instrumentosSolista,"percusion")
var hombreOrquesta:HombreOrquesta= new HombreOrquesta(instrumentosHombreOrquesta,"polivalente")
console.log("va a tocar el solista")
solista.tocar();
console.log("va a tocar el hombre orquesta")
hombreOrquesta.tocar()
trompeta.dondeEstoy()
