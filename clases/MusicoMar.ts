import { MusicoInterface } from "../interfaces/MusicoInterfaceMar.js";
import { Instrumento } from "./InstrumentoMar.js";

export abstract class Musico implements MusicoInterface{
   
    instrumentos:Array<Instrumento> //Array de objetos instrumentos
    tipo:string;

    constructor(instrumentos:Array<Instrumento>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

   abstract tocar(): void //void no devuelve nada
}