import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
@Input() saludo:string=""
@Output() eventoAPapa=new EventEmitter<any>();
mensajeAPapa:string=""
mensajeAPapaEvento:string=""
enviarEventoAPapa(){
  this.eventoAPapa.emit({texto:this.mensajeAPapaEvento})
}

}
