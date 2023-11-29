import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-comunicacion-evento-padre',
  templateUrl: './comunicacion-evento-padre.component.html'
})
export class ComunicacionEventoPadreComponent {
  nombrePadre: string = "Jose Antonio"
  nombreHijo: string = ""
  @Input() eventoHijo: EventEmitter<string> | undefined

  recibirDatosHijo(event: any) {
    this.nombreHijo = event.nombre
  }

}
