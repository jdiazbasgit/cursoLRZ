import { Musico } from "./Musico_JCGA.js";
export class HombreOrquesta extends Musico {
    tocar() {
        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar());
        });
    }
}
