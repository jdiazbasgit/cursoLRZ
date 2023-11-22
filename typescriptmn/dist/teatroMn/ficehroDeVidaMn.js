"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HombreOrquetaMn_js_1 = require("../ClaseConcierto/HombreOrquetaMn.js");
const SolistaMn_js_1 = require("../ClaseConcierto/SolistaMn.js");
const TamborMn_js_1 = require("../ClaseConcierto/TamborMn.js");
const TrompetaMn_js_1 = require("../ClaseConcierto/TrompetaMn.js");
var tambor = new TamborMn_js_1.Tambor("pom, pom, pom", "tambor");
var trompeta = new TrompetaMn_js_1.Trompeta("tuuu, tuuu, tuuu", "trompeta");
var instrumentosSolista = [tambor];
var instrumentosHombreOrquesta = [tambor, trompeta];
var solista = new SolistaMn_js_1.Solista(instrumentosSolista, "percusion");
var hombreOrquesta = new HombreOrquetaMn_js_1.HombreOrquesta(instrumentosHombreOrquesta, "polivalente");
console.log("va a tocar el solista");
solista.tocar();
console.log("va a tocar el hombre orquesta");
hombreOrquesta.tocar();
trompeta.dondeEstoy();
