import { Instrumento } from "./Instrumentos_jpt";

export class Musico{

    Instrumentos=new Array()
    tipo


    constructor(instrumentos,tipo){
        this.instrumentos=instrumentos
        this.tipo=tipo
    }

    tocar=()=>{
        console.log(`el musico es de tipo ${this.tipo}`)

        this.instrumentos.forEach(Instrumento => {
            console.log(instrumento.sonar())
        });
    }
}
