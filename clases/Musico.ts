import { InstrumentoInterface } from "../interfaces/InstrumentoInterface.js";
import { MusicoInterface } from "../interfaces/MusicoInterface.js";

export abstract class Musico implements MusicoInterface{
   
    instrumentos:Array<InstrumentoInterface> //Array de objetos instrumentos
    tipo:string;

    constructor(instrumentos:Array<InstrumentoInterface>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

    abstract tocar():void //void devuelve un vacio
}