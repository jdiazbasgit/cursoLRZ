import { HombreOrquesta } from "../clases/HombreOrquesta.js";
import { Solista } from "../clases/Solista.js";
import { Tambor } from "../clases/Tambor.js";
import { Trompeta } from "../clases/Trompeta.js";
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
