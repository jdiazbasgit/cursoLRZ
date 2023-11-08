import { DatosLaborales } from "./clases/DatosLaboralesMar.js";
import { DatosPersonales } from "./clases/DatosPersonalesMar.js";
import { Empleado } from "./clases/EmpleadoMar.js";
import { Empresa } from "./clases/EmpresaMar.js";
import { Hijos } from "./clases/HijosMar.js";

let hijos=new Hijos(3,5)
let datosLaborales=new DatosLaborales(5000,"jefe de proyecto")
let datosPersonales=new DatosPersonales("soltero",hijos)
let empleado=new Empleado("pepe garcia","6543278h","01/01/2000","01/01/2018",datosPersonales,datosLaborales)
//console.log(JSON.stringify(empleado))
let empleados= new Array()
empleados.push(empleado)
empleados.push(empleado)
empleados.push(empleado)
empleados.push(empleado)
empleados.push(empleado)
let empresa= new Empresa(empleados)
console.log(JSON.stringify(empresa))