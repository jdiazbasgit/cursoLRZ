//  El nombre de las clases e interfaces empliezan siempre en mayusculas
//se pone export porque la vamos a usar desde fuera
//hay que ver en esa clase que propiedades queremos darle (las propiedades son variables que puedes ser de distinto tipo)
//declaro una propiedad que es sonido, y la inicializo en "" porque no sabes que tipo de sonido va a tener por ahora
//construyo un constructor al que le das los valores que tienen las propiedades (que construye el objeto)
//puede haber mas propiedades y mas metodos pero solo un constructor
export class Instrumento{
    sonido=""

    constructor(sonido){
        this.sonido=sonido;
    }
//esta es la funcion, le digo que quiero hacer
//function sonar(){} (se puede quitar function)
//si tienes una funcion arrow y solo tiene una linea la funcion se puede quitar las llaves y return
    sonar=()=>{
        return this.sonido;
    }

}