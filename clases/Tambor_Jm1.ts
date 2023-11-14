import { Instrumento } from "./Instrumento_Jm1.js";

export class Tambor extends Instrumento{
    nombre:string

    constructor(nombre:string,sonido:string){
        super(sonido)
        this.nombre=nombre
    }

    quienSoy=():string=>{

        return `yo soy un instrumento, me llamo ${this.nombre} y sueno ${this.sonido}`
    }

    sonar(): string {
        return `yo sueno`
    }


}