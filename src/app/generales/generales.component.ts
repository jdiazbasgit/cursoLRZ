import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent {
   @Input() pais:Pais | undefined


/*constructor(private route:Router){
  this.cargarPais()
}
cargarPais(){
  const params=this.route.getCurrentNavigation()?.extras?.state;
  this.pais=params?.['data']
}*/

}
