import { Musico } from "./MusicoMar.js";
export class HombreOrquesta extends Musico {
    tocar() {
        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar());
        });
    }
}
