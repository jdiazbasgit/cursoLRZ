import { Component, Input, ViewChild, EventEmitter } from '@angular/core';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { Hijo2Component } from '../hijo2/hijo2.component';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent {
  @Input() eventoHijo1: EventEmitter<string> | undefined
  @Input() eventoHijo2: EventEmitter<string> | undefined
  @ViewChild(Hijo1Component) hijo1: Hijo1Component | undefined
  @ViewChild(Hijo2Component) hijo2: Hijo2Component | undefined
  saludoAlHijo1: string = ""
  saludoAlHijo2: string = ""

  recibirEventoDeHijo1(event: any) {
    this.eventoHijo1=event.texto
  }

  recibirEventoDeHijo2(event:any){
    this.eventoHijo2=event.texto
  }

}
