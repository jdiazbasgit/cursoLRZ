import { Instrumento } from "./Instrumento_JCGA.js";
export class Tambor extends Instrumento {
    constructor() {
        super(...arguments);
        this.quienSoy = () => {
            return `yo soy un instrumento, me llamo ${this.nombre} y sueno ${this.sonido}`;
        };
        this.sonar = () => {
            return `yo sueno como un tambor`;
            // Redefino el metodo sonar, porque me da la gana, pero solo para el tambor..., la trompeta sigue teneiendolo heredado estandar
        };
    }
}
