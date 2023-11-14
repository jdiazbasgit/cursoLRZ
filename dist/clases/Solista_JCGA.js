import { Musico } from "./Musico_JCGA.js";
export class Solista extends Musico {
    // Si no aporto ninguna propiedad nueva, y solo heredo de mi padre, no tengo ni que invocar a las propiedades del padre
    // si no mse redefinen las propiedades no se necesita redefinir el constructor
    tocar() {
        console.log(this.instrumentos[0].sonar());
    }
}
