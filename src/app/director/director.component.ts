import { Component, Output, ViewChild } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {
  directorEscucha: string=""
  directorDice: string="hola empleado"
  @ViewChild(EmpleadoComponent) hijoEmpleado: any
  directorEscucha=this.hijoEmpleado?.empleadoDice
}
