import { HombreOrquesta } from "../clases/HombreOrquesta_nsr.js";
import { Solista } from "../clases/Solista_nsr.js";
import { Tambor } from "../clases/Tambor_nsr.js";
import { Trompeta } from "../clases/Trompeta_nsr.js";
var tambor = new Tambor("pom, pom, pom", "tambor");
var trompeta = new Trompeta("tuuu, tuuu, tuuu", "trompeta");
var instrumentosSolista = [tambor];
var instrumentosHombreOrquesta = [tambor, trompeta];
var solista = new Solista(instrumentosSolista, "percusion");
var hombreOrquesta = new HombreOrquesta(instrumentosHombreOrquesta, "polivalente");
console.log("va a tocar el solista");
solista.tocar();
console.log("va a tocar el hombre orquesta");
hombreOrquesta.tocar();
//trompeta.dondeEstoy()
