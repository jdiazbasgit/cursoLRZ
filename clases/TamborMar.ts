import { Instrumento } from "./InstrumentoMar.js";

export class Tambor extends Instrumento{
    

    
   quienSoy=():string=>{

        return `yo soy un instrumento, me llamo ${this.nombre} y sueno ${this.sonido}`
    }

    sonar=(): string=>{
        return `yo sueno como un tambor`
    }
    

}