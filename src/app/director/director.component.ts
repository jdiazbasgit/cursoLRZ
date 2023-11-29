import { Component, ViewChild } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {
  digoAlempleado:string=""
  @ViewChild (EmpleadoComponent) empleadoResponde:string ="";

}
