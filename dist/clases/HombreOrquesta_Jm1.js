import { Musico } from "./Musico_Jm1.js";
export class HombreOrquesta extends Musico {
    tocar() {
        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar());
        });
    }
}
