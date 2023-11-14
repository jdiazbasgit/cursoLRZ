import { HombreOrquesta } from "../clases/HombreOrquestaMar.js";
import { Instrumento } from "../clases/InstrumentoMar.js";
import { Solista } from "../clases/SolistaMar.js";
import { Tambor } from "../clases/TamborMar.js";
import { Trompeta } from "../clases/TrompetaMar.js";
import { InstrumentoInterface } from "../interfaces/InstrumentoInterfaceMar.js";

var tambor:Tambor= new Tambor("pom, pom, pom","tambor")
//usando la interface:
var trompeta:InstrumentoInterface= new Trompeta("tuuu, tuuu, tuuu","trompeta")
//var trompeta:Trompeta= new Trompeta("tuuu, tuuu, tuuu","trompeta")
var instrumentosSolista:Array<InstrumentoInterface>=[tambor] //hay que definir que es un array de objetos InstrumentoInterface
var instrumentosHombreOrquesta:Array<InstrumentoInterface>=[tambor,trompeta]
var solista:Solista= new Solista(instrumentosSolista,"percusion")
var hombreOrquesta:HombreOrquesta= new HombreOrquesta(instrumentosHombreOrquesta,"polivalente")
console.log("va a tocar el solista")
solista.tocar();
console.log("va a tocar el hombre orquesta")
hombreOrquesta.tocar()
//trompeta.dondeEstoy() //ya no se puede usar porque trompeta no es un objeto de clase Instrumento
