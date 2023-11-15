export class Empleado{
    nombre
    dni
    fechaNacimiento
    fechaAlta
    datosPersonales
    datosLaborales
    constructor(nombre,dni,fechaNacimiento,fechaAlta,datosPersonales,datosLaborales){
        this.nombre = nombre
        this.dni = dni
        this.fechaAlta = fechaAlta
        this.fechaNacimiento = fechaNacimiento
        this.datosLaborales = datosLaborales
        this.datosPersonales = datosPersonales
    }
}