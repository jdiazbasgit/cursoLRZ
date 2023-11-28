import { Component, Input } from '@angular/core';
import { OdinComponent } from '../odin/odin.component';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent extends OdinComponent{
@Input() override pais:Pais  | undefined
}
