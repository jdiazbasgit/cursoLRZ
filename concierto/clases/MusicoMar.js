//estructura tipo de una clase:
//propiedades
//constructores
//métodos

export class Musico { //el export se puede quitar de aquí y poner fuera de la llave de cierre: export default Musico

    instrumentos = new Array(); //arrays en PLURAL // instrumentos =[];
    tipo; //la dejamos con UNDEFINED porque aún no sabemos de qué tipo será

    constructor(tipo,... instrumentos) { //tipo spread (rest) xq no sabes ctos instrumentos le pasas. IMP los puntos antes del parámetro de num indeterminado
        this.tipo = tipo;
        this.instrumentos = instrumentos;
    }


    //no se deben usar console.log en las clases!!!!!
    tocar = () => { 
        console.log(`el musico es de tipo ${this.tipo}`);
        
        //this.instrumentos.forEach(i => {console.log(i.sonar());
        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar());
        })
    }
}