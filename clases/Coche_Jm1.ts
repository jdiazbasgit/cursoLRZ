 export default  class Coche{
    marca:string
    modelo:string

    constructor(marca:string, modelo:string){
        this.marca=marca
        this.modelo=modelo
    }

    suma=(numero1:number,numero2:number):number=>numero1+numero2
}
