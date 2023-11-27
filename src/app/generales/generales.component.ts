import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent {
  @Input() pais:Pais | undefined //te va a entrar un Input desde fuera
  @Input("valor") valor:number=0


}
