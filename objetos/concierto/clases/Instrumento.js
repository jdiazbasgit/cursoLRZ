//  El nombre de las clases e interfaces empliezan siempre en mayusculas
export class Instrumento{
    sonido=""

    constructor(sonido){
        this.sonido=sonido
    }

    sonar=()=>{
        return this.sonido
    }

}