import { Component, Input } from '@angular/core'; //si usamos @Input hay q incluirlo aquí

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() empleadoEscucha: string =""

}
