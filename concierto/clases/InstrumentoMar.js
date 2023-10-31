//  El nombre de las clases e interfaces empiezan siempre en mayusculas

//estructura tipo de una clase:
//propiedades
//constructores
//métodos
export class Instrumento{
    sonido="";

    constructor(sonido){
        this.sonido=sonido;
    }

    // sonar(){ se le quita la palabra function por estar dentro de una clase
    sonar=()=>{ // sonar=()=> this.sonido;
        return this.sonido;
    }

}