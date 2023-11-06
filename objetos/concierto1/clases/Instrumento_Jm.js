//  El nombre de las clases e interfaces empliezan siempre en mayusculas
export class Instrumento{
    sonido="" //Propiedades, en base al uso que le voy a dar,  que diferencian un objeto (instrumento) de otro

    constructor(sonido){ //Constructor -  Los objetos se construyen por sus propiedades fijas en el tiempo, en el caso de instrumento es el sonido
        this.sonido=sonido
    }
    sonar (){ // Método - entre parentis va la cantidad de veces que quiero reproducir el sonido. En una clase, no se coloca la palabra Function porque hmtl reconoce que lo que tiene () es una funcion
    //sonar=()=>{ // Otro tipo de funcion con arrow (=>). 
        return this.sonido //definimos que hace (sonar) y como lo hace (sonido)
        //
    }

}