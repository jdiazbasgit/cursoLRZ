import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent {
  @Input() pais:Pais | undefined
  @Input("valor") valor:number=0


}
