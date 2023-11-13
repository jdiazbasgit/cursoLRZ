import { Musico } from "./Musico.js";

export class HombreOrquesta extends Musico{
    tocar(): void {
        this.instrumentos.forEach(instrumento=>{
            console.log(instrumento.sonar())
        })
    }

}