import { MusicoInterface } from "../interfaces/MusicoInterface.js";
import { Instrumento } from "./Instrumento_dmr.js";

export abstract class Musico implements MusicoInterface{
   
    instrumentos:Array<Instrumento> //Array de objetos instrumentos
    tipo:string;

    constructor(instrumentos:Array<Instrumento>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

   abstract tocar(): void //void no devuelve nada
}