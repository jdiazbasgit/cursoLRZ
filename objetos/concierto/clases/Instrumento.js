export class Instrumento {
    sonido = ""

    constructor(sonido) {
        this.sonido = sonido
    }

    sonar = () => {
        return this.sonido
    }
}