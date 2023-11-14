import { MusicoInterface } from "../interfaces/MusicoInterfaceMar.js";
import { InstrumentoInterface } from "../interfaces/InstrumentoInterfaceMar.js";

export abstract class Musico implements MusicoInterface{ //abstract para definir que es una clase abstracta (no puede crear un objeto por si misma, xq no puede concretar)
   
    instrumentos:Array<InstrumentoInterface> //Array de objetos instrumentos
    tipo:string;

    constructor(instrumentos:Array<InstrumentoInterface>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

   abstract tocar(): void //añadir ABSTRACT, coincide con linea 4; void no devuelve nada
}