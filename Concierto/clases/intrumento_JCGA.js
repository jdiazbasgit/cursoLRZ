// No puedo meter aqui las clases que son interfases,( es decir, son clases abstractas:me dicen lo qu etengo que hacer, pero no el como) porque solo se usan con typescript

// Se suelen nombrar con PascalCase
// NombreDeClase
// nombreDeVariable
// nombreDeMetodo
// nombreDeFuncion
// nombredecarpeta
// const PI  ...   NOMBRE_DE_CONST

export class Instrumento{
    sonido=""
    // creo la variable que necesito y la inicializo

    constructor(sonido){
    this.sonido=sonido
    }
// y ahora los metodos
    // function sonar(){}
    sonar=()=>{
        return this.sonido
    }
}