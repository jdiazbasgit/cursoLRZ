import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-geograficos',
  templateUrl: './geograficos.component.html',
  styleUrls: ['./geograficos.component.css']
})
export class GeograficosComponent {
@Input() pais:Pais|undefined
}
