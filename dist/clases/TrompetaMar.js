import { Instrumento } from "./InstrumentoMar.js";
export class Trompeta extends Instrumento {
    constructor() {
        super(...arguments);
        this.dondeEstoy = () => {
            console.log("estoy en el teatro");
        };
    }
}
