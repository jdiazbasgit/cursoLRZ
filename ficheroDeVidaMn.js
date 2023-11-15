import { DatosLaborales } from "./clasesJsonMn/DatosLaboralesMn.js";
import { DatosPersonales } from "./clasesJsonMn/DatosPersonalesMn.js";
import { Empleado } from "./clasesJsonMn/EmpleadoMn.js";
import { Empresa } from "./clasesJsonMn/EmpresaMn.js";
import { Hijos } from "./clasesJsonMn/HijosMn.js";

let hijos = new Hijos(3,5)
let datosLaborales = new DatosLaborales(5000,"jefe de proyecto")
let datosPersonales = new DatosPersonales("soltero",hijos)
let empleado = new Empleado ("pepe garcia","6543278h","01/01/2000","01/01/2018",datosPersonales,datosLaborales)

//llamar el objeto creado con el log de empleado

//console.log(empleado); 

//llamarlo como archivo jsom que esta sera la estructura JSON.stringify y el nombre del objeto creado ejm: console.log(JSON.stringify(empleado))

//console.log(JSON.stringify(empleado))

//construir la empresa con varios empleados.

let empleados= new Array()
empleados.push(empleado)
empleados.push(empleado)
empleados.push(empleado)
empleados.push(empleado)
empleados.push(empleado)
let empresa= new Empresa(empleados)
console.log(JSON.stringify(empresa)) 