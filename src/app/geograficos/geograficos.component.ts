import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geograficos',
  templateUrl: './geograficos.component.html',
  styleUrls: ['./geograficos.component.css']
})
export class GeograficosComponent {
 pais:Pais|undefined
constructor(private route:Router){
  this.cargarPais()
}
cargarPais(){
  const params=this.route.getCurrentNavigation()?.extras?.state;
  this.pais=params?.['data']
  
}
}
