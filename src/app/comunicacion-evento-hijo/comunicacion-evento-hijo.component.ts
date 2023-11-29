import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion-evento-hijo',
  templateUrl: './comunicacion-evento-hijo.component.html'
})
export class ComunicacionEventoHijoComponent {

  nombreHijo:string="Andres"
  @Output() eventoParaPapa = new EventEmitter<any>();


  enviarNombre=()=>{
    this.eventoParaPapa.emit({nombre:this.nombreHijo})
  }
}


