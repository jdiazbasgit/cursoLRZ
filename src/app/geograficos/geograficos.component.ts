import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';
import { Router } from '@angular/router';
import { OdinComponent } from '../odin/odin.component';

@Component({
  selector: 'app-geograficos',
  templateUrl: './geograficos.component.html',
  styleUrls: ['./geograficos.component.css']
})
export class GeograficosComponent extends OdinComponent{
 @Input() override pais:Pais | undefined
}
