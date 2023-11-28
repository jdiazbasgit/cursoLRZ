import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  @Input() saludo: string = ""
  @Output() eventoParaPapa = new EventEmitter<any>();
  mensajeAPapa:string=""
  mensajeAPapaEvento:string=""

  enviarEventoAPapa(mensaje: string) {
    this.eventoParaPapa.emit({ texto: mensaje })
  }

}
