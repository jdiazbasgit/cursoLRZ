

export class Musico{
    
    instrumentos=new Array()
    tipo

    constructor(instrumentos,tipo){
        this.instrumentos=instrumentos
        this.tipo=tipo
    }

    tocar=()=>{
        console.log(`el musico es de tipo ${this.tipo}`)

       this.instrumentos.forEach(instrumento=>{
        console.log(instrumento.sonar())
       })
        
    }

}