// creo una clase animal con sus propiedades raza y especie

// Si no le pongo un export, no lo puedo usar en otro sitio y el codigo tendría que estar en este mismo archivo

export class Animal{
    raza=""
    especie=""

    constructor(especie,raza){
        this.raza=raza
        this.especie=especie
    }
    // this.raza indica la propiedad raza
}
