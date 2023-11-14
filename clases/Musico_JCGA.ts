
import { MusicoInterface } from "../interfaces/MusicoInterface_JCGA.js";
// el archivo que va a recibir es "js", porque va a utilizar el archivo YA compilado

import { Instrumento } from "./Instrumento_JCGA.js";

export abstract class Musico implements MusicoInterface{
   
    instrumentos:Array<Instrumento> //Array de objetos instrumentos
    // esto de arriva es un "template"...., es un array de objetos instrumentos; solo puedo meter instrumentos y lo que saque será un instrumento
   
    // estamos llamando a instrumento, pero realmente el nombre del instrumento no lo estamos usando luego en el codigo de vida...., así que podría utilizar InstrumentoInterface en lugar de Instrumento (que es lo que hace el profe en su archivo)

    tipo:string;

    constructor(instrumentos:Array<Instrumento>,tipo:string){
        this.instrumentos=instrumentos;
        this.tipo=tipo
    }

   abstract tocar(): void //void no devuelve nada
}

// tengo que definir el metodo como abstracto, porque no se a este nivel como tca el musico (puede tocar como solista u hombre orquesta). Por ello necesito meter en metodo el "abstract"...., y en el export de la clase (al principio)