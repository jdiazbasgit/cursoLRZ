
//creo una clase musico
//no ponemos var en las propiedades por estar dentro de una clase
//no ponemos function por estar dentro de una clase
//construyo un constructor al que le das los valores que tienen las propiedades (instrumnetos y tipo)

export class Musico{
    
    instrumentos=new Array();
    tipo;

    constructor(tipo,...instrumentos){
        this.instrumentos=instrumentos;
        this.tipo=tipo;
    }

    tocar=()=>{
        console.log(`el musico es de tipo ${this.tipo}`);

    //instrumento se refiere a los elementos del array que va arecorrer con forEach es lo mismo que poner(i=> {console.log(i.sonar())})
       this.instrumentos.forEach(instrumento=>{
        console.log(instrumento.sonar());
       })
        
    }

}