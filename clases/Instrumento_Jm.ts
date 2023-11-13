import { InstrumentoInterface } from "../interfaces/InstrumentoInterface.js";

export class Instrumento implements InstrumentoInterface{

    sonido:string

    constructor(sonido:string){
        this.sonido=sonido
    }
    sonar(): string {
        return this.sonido
    }

}