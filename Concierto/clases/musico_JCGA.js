

export class Musico {

    instrumentos = new Array()
    tipo

    // como puede tocar varios instrumentos, necesito un array para meter los diferentes instrumentos

    // defino instrumentos sin decir cuantos instrumentos voy a recibir..., aunque no necesitaria hacer el spread(...) y quedaria como (instrumentos,tipo)
    constructor(tipo,... instrumentos) {
        this.instrumentos = instrumentos
        this.tipo = tipo
    }

    // y ahora el metodo..., la función

    tocar = () => {
        console.log(`El musico es de tipo ${this.tipo}`)
        // return this.tipo
        this.instrumentos.forEach(instrumento =>
            console.log(instrumento.sonar()))
            // return this.instrumentos
            // return this.sonido
    }
}
