import { InstrumentoInterface } from "../interfaces/InstrumentoInterface_Jm1.js";
import { MusicoInterface } from "../interfaces/MusicoInterface_Jm1.js";
import { Instrumento } from "./Instrumento_Jm1.js";

export abstract class Musico implements MusicoInterface{
    instrumentos:Array<InstrumentoInterface> //Array de objetos instrumentos
    tipo:string;

    constructor(instrumentos:Array<InstrumentoInterface>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

   abstract tocar(): void //void no devuelve nada
}