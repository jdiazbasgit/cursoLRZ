import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() empleadoEscucha: string=""
  empleadoDice: string="Hola director"
  

}
