import { Instrumento } from "./InstrumentoMar.js";
export class Tambor extends Instrumento {
    constructor() {
        super(...arguments);
        this.quienSoy = () => {
            return `yo soy un instrumento, me llamo ${this.nombre} y sueno ${this.sonido}`;
        };
        this.sonar = () => {
            return `yo sueno como un tambor`;
        };
    }
}
