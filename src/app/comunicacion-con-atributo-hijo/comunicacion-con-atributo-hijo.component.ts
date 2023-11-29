import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comunicacion-con-atributo-hijo',
  templateUrl: './comunicacion-con-atributo-hijo.component.html'})
export class ComunicacionConAtributoHijoComponent {

  @Input() datosEntrada:any | undefined
}
