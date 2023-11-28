import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';
import { Router, Routes } from '@angular/router';
import { OdinComponent } from '../odin/odin.component';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent extends OdinComponent{
   @Input() override pais:Pais | undefined 

}
