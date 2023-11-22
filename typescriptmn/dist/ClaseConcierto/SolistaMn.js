import { Musico } from "./MusicoMn.js";
export class Solista extends Musico {
    // si no mse redefinen las propiedades no se necesita redefinir el constructor
    tocar() {
        console.log(this.instrumentos[0].sonar());
    }
}
