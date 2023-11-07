export class Musico {
    tipo
    instrumentos = new Array()
    //instrumentos=[]
    
    constructor(tipo, instrumentos) {
        this.instrumentos = instrumentos
        this.tipo = tipo
    }

    // constructor(tipo, ...instrumentos) {
    //    this.tipo = tipo
    //    this.instrumentos = instrumentos       
    // }

    // tocar = () => {
    //     console.log(`el musico es de tipo ${this.tipo}`)

    //     this.instrumentos.forEach(instrumento => {  
    //         console.log(instrumento.sonar())          
    //     })
    //  
    // }
}