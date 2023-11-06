

export class Musico {

    instrumentos = new Array()
    tipo
    constructor(tipo,... instrumentos){
    //constructor(tipo, instrumentos) {
        this.tipo = tipo
        this.instrumentos = instrumentos
    }

    tocar = () => {
       console.log(`el musico es de tipo ${this.tipo}`)


        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar())
        })

    }

}