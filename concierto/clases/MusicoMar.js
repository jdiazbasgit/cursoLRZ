export class Musico {

    instrumentos = new Array(); //arrays en PLURAL
    tipo; //la dejamos con UNDEFINED porque aún no sabemos de qué tipo será

    constructor(instrumentos, tipo) {
        this.instrumentos = instrumentos;
        this.tipo = tipo;
    }

    tocar = () => {
        console.log(`el musico es de tipo ${this.tipo}`);
        
        //this.instrumentos.forEach(i => {console.log(i.sonar());
        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar());
        })
    }
}