import { MusicoInterface} from "../interfacesMn/MusicoInterfaceMn.js";
import { Instrumento } from "./InstrumentoMn.js";

export abstract class Musico implements MusicoInterface{
   
    instrumentos:Array<Instrumento> //Array de objetos instrumentos es como un templete
    
    tipo:string;

    constructor(instrumentos:Array<Instrumento>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

   abstract tocar(): void //void no devuelve nada
}