import { Component, ViewChild } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {
  @ViewChild(EmpleadoComponent) empleado: any | undefined
  mensajeAlEmpleado: string = "TE VOY A SUBIR EL SUELDO"

  ngOnInit() {
    alert("entrandoo.......")
    this.empleado.mensajeDelJefe = this.mensajeAlEmpleado
  }
}
