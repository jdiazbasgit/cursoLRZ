//Crea una clase Animal con las siguientes propiedades: raza y especie
export class Animal { //El export es para que me vean desde afuera, si no lo pongo tendría que tener todo el codigo en este archivo

    raza = ""
    especie = ""

    constructor(raza, especie) { //Se declara el valor de la propiedad
        this.raza = raza
        this.especie = especie
    }
}