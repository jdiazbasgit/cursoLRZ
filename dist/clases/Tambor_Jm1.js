import { Instrumento } from "./Instrumento_Jm1.js";
export class Tambor extends Instrumento {
    constructor(nombre, sonido) {
        super(sonido);
        this.quienSoy = () => {
            return `yo soy un instrumento, me llamo ${this.nombre} y sueno ${this.sonido}`;
        };
        this.nombre = nombre;
    }
    sonar() {
        return `yo sueno`;
    }
}
