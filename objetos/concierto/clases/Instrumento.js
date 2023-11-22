export class Instrumento {
    sonido = "" // propiedad de la clase= variables que son de algun tipo: numeros,string,boleanos,objetos. Siempre se inicializa =""

    constructor(sonido) { //recibe los valores que tu quieres darle a las propiedades
        this.sonido = sonido // Aqui ya tienes el objeto construido
    }

    sonar(){   //no necesita la palabra function
    return this.sonido
}                 // funciones o metodos dicen lo que vas a hacer con el        objeto,        entre              los parentesis puedes poner parametros (por ejemplo cantidad )y entre las llaves la accion

//    sonar = () => {
//        return this.sonido
//    }  Como es una sola linea, las funciones flechas se pueden poner en una sola linea sonar=()=>this.sonido
}