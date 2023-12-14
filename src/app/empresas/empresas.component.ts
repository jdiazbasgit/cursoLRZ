import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  puestos= new Array();
  empresas= new Array();
  enlaces= new Array();

  guardaDatos(puesto:string,empresa:string,enlace:string){
    this.puestos.push(puesto)
    this.empresas.push(empresa)
    this.enlaces.push(enlace)
  }

}
