import { Musico } from "./Musico_dmr.js";

export class HombreOrquesta extends Musico{
    tocar(): void {
        this.instrumentos.forEach(instrumento=>{
            console.log(instrumento.sonar())
        })
    }

}