
import { Musico } from "./MusicoMar.js";

export class Solista extends Musico{

    // si no se redefinen las propiedades no se necesita redefinir el constructor
    tocar(): void { //aquí ya se puede definir el método tocar()
        console.log(this.instrumentos[0].sonar())
    }
    
}