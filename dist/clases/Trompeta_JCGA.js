import { Instrumento } from "./Instrumento_JCGA.js";
export class Trompeta extends Instrumento {
    constructor() {
        super(...arguments);
        this.dondeEstoy = () => {
            console.log("estoy en el teatro");
        };
    }
}

// ojo, en las clases no deberíamos meter console.log, que nos sirven para pruebas, pero deberíamos sustituirlos por returns
