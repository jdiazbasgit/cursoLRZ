//  El nombre de las clases e interfaces empiezan siempre en mayusculas
export class Instrumento{
    sonido="";

    constructor(sonido){
        this.sonido=sonido;
    }

    sonar=()=>{ // sonar=()=> this.sonido;
        return this.sonido;
    }

}