
import { Musico } from "./Musico_dmr.js";

export class Solista extends Musico{

    // si no mse redefinen las propiedades no se necesita redefinir el constructor
    tocar(): void {
        console.log(this.instrumentos[0].sonar())
    }
    
}