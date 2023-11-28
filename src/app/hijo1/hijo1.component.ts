import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  @Input() saludo: string = ""
  @Output() eventoParaPapa = new EventEmitter<any>();
  mensajeAPapa: string = ""
  codigoPostal: string = ""
  error: string = ""
  enviarEventoAPapa(mensaje: string) {
    this.error = ""
    if (isNaN(Number(this.codigoPostal))) {
      this.error = "El código postal debe ser numerico"
      return
    }

    this.eventoParaPapa.emit({
      name: {
        common: "spain",
        official: "kingdom of spain"
      }
    })
  }

}
