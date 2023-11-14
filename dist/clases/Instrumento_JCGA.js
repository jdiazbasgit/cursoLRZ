export class Instrumento {
    constructor(sonido, nombre) {
        this.sonido = sonido;
        this.nombre = nombre;
    }
    sonar() {
        return this.sonido;
    }
}
