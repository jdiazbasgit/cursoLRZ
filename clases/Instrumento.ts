import { InstrumentoInterface } from "../interfaces/InstrumentoInterface.js";

export class Instrumento implements InstrumentoInterface{

    sonido:string
    nombre:string

    constructor(sonido:string,nombre:string){
        this.sonido=sonido
        this.nombre=nombre
    }
    sonar(): string {
        return this.sonido
    }

}