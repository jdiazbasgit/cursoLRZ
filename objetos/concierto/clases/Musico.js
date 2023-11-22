
export class Musico{
    
    instrumentos=new Array() // propiedades en este caso es un array porque hay varios instrumentos. Dentro de las clases no se pone var ni let
    tipo=""

    constructor(tipo,instrumentos){
        this.instrumentos=instrumentos
        this.tipo=tipo
    }


    // constructor(tipo,...instrumentos){//spread ... se pasan un num indeterminado de elementos
    //     this.instrumentos=instrumentos
    //     this.tipo=tipo
    // }

    // tocar=()=>{
    //     console.log(`el musico es de tipo ${this.tipo}`)// no se debe poner aqui el console log

    //    this.instrumentos.forEach(instrumento=>{ //recorre el array
    //     console.log(instrumento.sonar())
    //    })
        
    // }

}
export default Musico; // se puede poner el export al final tambien