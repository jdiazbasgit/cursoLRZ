// No puedo meter aqui las clases que son interfases,( es decir, son clases abstractas:me dicen lo qu etengo que hacer, pero no el como) porque solo se usan con typescript

// Se suelen nombrar con PascalCase
// NombreDeClase
// nombreDeVariable
// nombreDeMetodo
// nombreDeFuncion
// nombredecarpeta
// const PI  ...   NOMBRE_DE_CONST

//  El nombre de las clases e interfaces empliezan siempre en mayusculas
export class Instrumento{
    sonido=""

    constructor(sonido){
        this.sonido=sonido
    }

     //sonar(){
    sonar=()=>this.sonido
   

}