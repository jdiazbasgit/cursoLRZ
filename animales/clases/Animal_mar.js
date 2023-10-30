export class Animal{ //siempre EXPORT y en el otro js IMPORT
    raza=""; //lo inicializamos para evitar undefined;
    especie="";

    constructor(especie,raza){
        this.raza=raza;//Le pasa a la propiedad raza el valor que le pasa el constructor;
        this.especie=especie;
    }

}