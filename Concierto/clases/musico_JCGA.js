

export class Musico {

    instrumentos = new Array()
    tipo

    // como puede tocar varios instrumentos, necesito un array para meter los diferentes instrumentos

    constructor(instrumentos,tipo) {
        this.instrumentos = instrumentos
        this.tipo=tipo
    }

    // y ahora el metodo..., la función

    tocar = () => {
        console.log(`El musico es de tipo ${this.tipo}`)
        this.instrumentos.forEach(instrumento => {
        console.log(instrumento.sonar())
        })
    }
}


